import { Prisma } from "../../generated/prisma/client.js";
import { AppError } from "../utils/appError.js";
import { syncStockAlert } from "../utils/stockAlert.util.js";
import { productRepository } from "../repositories/product.repository.js";
import { deleteFromCloudinary } from "../utils/cloudinaryDestroy.js";
import { uploadBufferToCloudinary } from "../utils/cloudinaryUpload.js";
import type {
  CreateProductInput,
  UpdateProductInput,
  ProductQueryInput,
} from "../validators/product.schemas.js";

type UploadedFile = {
  buffer: Buffer;
};

type ProductTallaInput = {
  talla: string;
  stock: number;
  activo: boolean;
};

type ProductTallaRawInput = {
  talla: string;
  stock: number;
  activo?: boolean | undefined;
};

const normalizeTallas = (
  tallas: ProductTallaRawInput[]
): ProductTallaInput[] => {
  return tallas.map((item) => ({
    talla: item.talla,
    stock: item.stock,
    activo: item.activo ?? true,
  }));
};

const sumActiveTallasStockLocal = (tallas: ProductTallaInput[]): number => {
  return tallas.reduce((total, item) => {
    return item.activo ? total + item.stock : total;
  }, 0);
};

const getActiveExistingTallas = (
  tallas: Array<{
    talla: string;
    stock: number;
    activo?: boolean | null;
  }>
): ProductTallaInput[] => {
  return tallas
    .filter((item) => item.activo ?? true)
    .map((item) => ({
      talla: item.talla,
      stock: item.stock,
      activo: item.activo ?? true,
    }));
};

const buildProductFilters = (
  query: ProductQueryInput,
  includeOutOfStock: boolean
): Prisma.ProductoWhereInput => {
  const filters: Prisma.ProductoWhereInput[] = [];

  if (query.search) {
    filters.push({
      OR: [
        { nombre: { contains: query.search, mode: "insensitive" } },
        { descripcion: { contains: query.search, mode: "insensitive" } },
        { material: { contains: query.search, mode: "insensitive" } },
        {
          categoria: {
            nombre: { contains: query.search, mode: "insensitive" },
          },
        },
        {
          tallas: {
            some: {
              talla: { contains: query.search, mode: "insensitive" },
            },
          },
        },
      ],
    });
  }

  if (query.categoria_id !== undefined) {
    filters.push({
      categoria_id: query.categoria_id,
    });
  }

  filters.push({
    activo: query.activo ?? true,
  });

  if (!includeOutOfStock) {
    filters.push({
      OR: [
        {
          usar_tallas: false,
          stock: {
            gt: 0,
          },
        },
        {
          usar_tallas: true,
          tallas: {
            some: {
              stock: {
                gt: 0,
              },
            },
          },
        },
      ],
    });
  }

  return filters.length > 0 ? { AND: filters } : {};
};

export const productService = {
  getProducts: async (query: ProductQueryInput) => {
    const filters = buildProductFilters(query, false);

    return productRepository.findPublicProducts(filters);
  },

  getAdminProducts: async (query: ProductQueryInput) => {
    const filters = buildProductFilters(query, true);

    return productRepository.findAdminProducts(filters);
  },

  getProductById: async (id: number, isAdminView: boolean) => {
    const product = isAdminView
      ? await productRepository.findByIdAdmin(id)
      : await productRepository.findByIdPublic(id);

    if (!product) {
      throw new AppError("Producto no encontrado", 404);
    }

    if (!isAdminView && !product.activo) {
      throw new AppError("Producto no encontrado", 404);
    }

    return product;
  },

  createProduct: async (body: CreateProductInput, file?: UploadedFile) => {
    const categoryExists = await productRepository.findCategoryById(
      body.categoria_id
    );

    if (!categoryExists) {
      throw new AppError("La categoría no existe", 404);
    }

    const existingProduct = await productRepository.findActiveProductByName(
      body.nombre
    );

    if (existingProduct) {
      throw new AppError("Ya existe un producto con ese nombre", 409);
    }

    let imagen_url: string | null = null;
    let imagen_public_id: string | null = null;

    try {
      if (file) {
        const uploadResult = await uploadBufferToCloudinary(file.buffer);
        imagen_url = uploadResult.secure_url;
        imagen_public_id = uploadResult.public_id;
      }

      const createData: Prisma.ProductoCreateInput = {
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
        material: body.material,
        usar_tallas: body.usar_tallas ?? false,
        stock_minimo: body.stock_minimo ?? 5,
        activo: body.activo ?? true,
        imagen_url,
        imagen_public_id,
        categoria: {
          connect: {
            id: body.categoria_id,
          },
        },
      };

      if (body.usar_tallas === true) {
        const tallas = normalizeTallas(body.tallas ?? []);

        if (tallas.length === 0) {
          throw new AppError(
            "Debes enviar al menos una talla cuando el producto usa tallas",
            400
          );
        }

        createData.stock = sumActiveTallasStockLocal(tallas);

        createData.tallas = {
          create: tallas,
        };
      } else {
        createData.stock = body.stock ?? 0;
      }

      const product = await productRepository.createProduct(createData);

      await syncStockAlert(product.id);

      return product;
    } catch (error) {
      if (imagen_public_id) {
        await deleteFromCloudinary(imagen_public_id);
      }

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new AppError("Ya existe un producto con ese nombre", 409);
      }

      throw error;
    }
  },

  updateProduct: async (
    id: number,
    body: UpdateProductInput,
    file?: UploadedFile
  ) => {
    const existingProduct = await productRepository.findByIdWithTallas(id);

    if (!existingProduct) {
      throw new AppError("Producto no encontrado", 404);
    }

    const finalUsarTallas = body.usar_tallas ?? existingProduct.usar_tallas;

    if (body.categoria_id !== undefined) {
      const categoryExists = await productRepository.findCategoryById(
        body.categoria_id
      );

      if (!categoryExists) {
        throw new AppError("La categoría no existe", 404);
      }
    }

    if (body.nombre !== undefined) {
      const duplicateProduct =
        await productRepository.findProductByNameExceptId(body.nombre, id);

      if (duplicateProduct) {
        throw new AppError("Ya existe otro producto con ese nombre", 409);
      }
    }

    const tallasToUse: ProductTallaInput[] | undefined = finalUsarTallas
      ? body.tallas !== undefined
        ? normalizeTallas(body.tallas)
        : getActiveExistingTallas(existingProduct.tallas)
      : undefined;

    if (finalUsarTallas && (!tallasToUse || tallasToUse.length === 0)) {
      throw new AppError(
        "El producto debe tener al menos una talla activa cuando usa tallas",
        400
      );
    }

    let newImageUrl = existingProduct.imagen_url;
    let newImagePublicId = existingProduct.imagen_public_id;
    let uploadedNewImagePublicId: string | null = null;

    try {
      if (file) {
        const uploadResult = await uploadBufferToCloudinary(file.buffer);
        newImageUrl = uploadResult.secure_url;
        newImagePublicId = uploadResult.public_id;
        uploadedNewImagePublicId = uploadResult.public_id;
      } else if (body.removeImage === true) {
        newImageUrl = null;
        newImagePublicId = null;
      }

      const updateData: Prisma.ProductoUpdateInput = {
        imagen_url: newImageUrl,
        imagen_public_id: newImagePublicId,
      };

      if (body.nombre !== undefined) {
        updateData.nombre = body.nombre;
      }

      if (body.descripcion !== undefined) {
        updateData.descripcion = body.descripcion;
      }

      if (body.precio !== undefined) {
        updateData.precio = body.precio;
      }

      if (body.stock_minimo !== undefined) {
        updateData.stock_minimo = body.stock_minimo;
      }

      if (body.material !== undefined) {
        updateData.material = body.material;
      }

      if (body.activo !== undefined) {
        updateData.activo = body.activo;
      }

      if (body.usar_tallas !== undefined) {
        updateData.usar_tallas = body.usar_tallas;
      }

      if (body.categoria_id !== undefined) {
        updateData.categoria = {
          connect: {
            id: body.categoria_id,
          },
        };
      }

      if (finalUsarTallas) {
        updateData.stock = sumActiveTallasStockLocal(tallasToUse ?? []);

        if (body.tallas !== undefined) {
          updateData.tallas = {
            create: tallasToUse ?? [],
          };
        }
      } else {
        updateData.stock =
          body.stock !== undefined ? body.stock : existingProduct.stock ?? 0;
      }

      const shouldDeleteTallas =
        body.tallas !== undefined ||
        (existingProduct.usar_tallas && !finalUsarTallas);

      const updatedProduct = await productRepository.updateProduct(
        id,
        updateData,
        shouldDeleteTallas
      );

      if (file && existingProduct.imagen_public_id) {
        await deleteFromCloudinary(existingProduct.imagen_public_id);
      }

      if (body.removeImage === true && existingProduct.imagen_public_id) {
        await deleteFromCloudinary(existingProduct.imagen_public_id);
      }

      await syncStockAlert(updatedProduct.id);

      return updatedProduct;
    } catch (error) {
      if (uploadedNewImagePublicId) {
        await deleteFromCloudinary(uploadedNewImagePublicId);
      }

      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new AppError("Ya existe otro producto con ese nombre", 409);
      }

      throw error;
    }
  },

  deleteProduct: async (id: number) => {
    const product = await productRepository.findById(id);

    if (!product) {
      throw new AppError("Producto no encontrado", 404);
    }

    if (!product.activo) {
      throw new AppError("El producto ya está inactivo", 400);
    }

    const updatedProduct = await productRepository.deactivateById(id);

    await syncStockAlert(updatedProduct.id);

    return updatedProduct;
  },
};

import { AppError } from "../utils/appError.js";
import { categoryRepository } from "../repositories/category.repository.js";
export const categoryService = {
    getCategories: async () => {
        return categoryRepository.findAll();
    },
    getCategoryById: async (id) => {
        const category = await categoryRepository.findByIdWithProducts(id);
        if (!category) {
            throw new AppError("Categoría no encontrada", 404);
        }
        return category;
    },
    createCategory: async (body) => {
        const existingCategory = await categoryRepository.findByName(body.nombre);
        if (existingCategory) {
            throw new AppError("La categoría ya existe", 409);
        }
        return categoryRepository.create({
            nombre: body.nombre,
            descripcion: body.descripcion ?? null,
        });
    },
    updateCategory: async (id, body) => {
        const category = await categoryRepository.findById(id);
        if (!category) {
            throw new AppError("Categoría no encontrada", 404);
        }
        const data = {};
        if (body.nombre !== undefined) {
            const duplicateCategory = await categoryRepository.findByNameExceptId(body.nombre, id);
            if (duplicateCategory) {
                throw new AppError("Ya existe otra categoría con ese nombre", 409);
            }
            data.nombre = body.nombre;
        }
        if (body.descripcion !== undefined) {
            data.descripcion = body.descripcion ?? null;
        }
        return categoryRepository.update(id, data);
    },
    deleteCategory: async (id) => {
        const category = await categoryRepository.findByIdWithProducts(id);
        if (!category) {
            throw new AppError("Categoría no encontrada", 404);
        }
        if (category.productos.length > 0) {
            throw new AppError("No se puede eliminar la categoría porque tiene productos asociados", 400);
        }
        await categoryRepository.delete(id);
    },
};
//# sourceMappingURL=category.service.js.map
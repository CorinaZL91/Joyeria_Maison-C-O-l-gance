import type { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { productService } from "../services/product.service.js";

import {
  productQuerySchema,
  type CreateProductInput,
  type ProductIdParamsInput,
  type ProductQueryInput,
  type UpdateProductInput,
} from "../validators/product.schemas.js";

export const getProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const parsedQuery = productQuerySchema.safeParse(req.query);

    if (!parsedQuery.success) {
      res.status(400).json({
        success: false,
        message: "Error de validación en filtros de productos",
        errors: parsedQuery.error.flatten(),
      });
      return;
    }

    const products = await productService.getProducts(parsedQuery.data);

    res.status(200).json({
      success: true,
      data: products,
    });
  }
);

export const getAdminProducts = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const parsedQuery = productQuerySchema.safeParse(req.query);

    if (!parsedQuery.success) {
      res.status(400).json({
        success: false,
        message: "Error de validación en filtros de productos",
        errors: parsedQuery.error.flatten(),
      });
      return;
    }

    const products = await productService.getAdminProducts(parsedQuery.data);

    res.status(200).json({
      success: true,
      data: products,
    });
  }
);

export const getProductById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const params = req.params as unknown as ProductIdParamsInput;

    const parsedQuery = productQuerySchema.safeParse(req.query);

    if (!parsedQuery.success) {
      res.status(400).json({
        success: false,
        message: "Error de validación en query",
        errors: parsedQuery.error.flatten(),
      });
      return;
    }

    const product = await productService.getProductById(
      params.id,
      parsedQuery.data.admin === true
    );

    res.status(200).json({
      success: true,
      data: product,
    });
  }
);

export const createProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const body = req.body as CreateProductInput;

    const product = await productService.createProduct(body, req.file);

    res.status(201).json({
      success: true,
      message: "Producto creado correctamente",
      data: product,
    });
  }
);

export const updateProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const params = req.params as unknown as ProductIdParamsInput;
    const body = req.body as UpdateProductInput;

    const updatedProduct = await productService.updateProduct(
      params.id,
      body,
      req.file
    );

    res.status(200).json({
      success: true,
      message: "Producto actualizado correctamente",
      data: updatedProduct,
    });
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const params = req.params as unknown as ProductIdParamsInput;

    const updatedProduct = await productService.deleteProduct(params.id);

    res.status(200).json({
      success: true,
      message: "Producto desactivado correctamente",
      data: updatedProduct,
    });
  }
);

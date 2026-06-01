import { asyncHandler } from "../utils/asyncHandler.js";
import { productService } from "../services/product.service.js";
export const getProducts = asyncHandler(async (req, res) => {
    const query = req.query;
    const products = await productService.getProducts(query);
    res.status(200).json({
        success: true,
        data: products,
    });
});
export const getAdminProducts = asyncHandler(async (req, res) => {
    const query = req.query;
    const products = await productService.getAdminProducts(query);
    res.status(200).json({
        success: true,
        data: products,
    });
});
export const getProductById = asyncHandler(async (req, res) => {
    const params = req.params;
    const query = req.query;
    const product = await productService.getProductById(params.id, query.admin === true);
    res.status(200).json({
        success: true,
        data: product,
    });
});
export const createProduct = asyncHandler(async (req, res) => {
    const body = req.body;
    const product = await productService.createProduct(body, req.file);
    res.status(201).json({
        success: true,
        message: "Producto creado correctamente",
        data: product,
    });
});
export const updateProduct = asyncHandler(async (req, res) => {
    const params = req.params;
    const body = req.body;
    const updatedProduct = await productService.updateProduct(params.id, body, req.file);
    res.status(200).json({
        success: true,
        message: "Producto actualizado correctamente",
        data: updatedProduct,
    });
});
export const deleteProduct = asyncHandler(async (req, res) => {
    const params = req.params;
    const updatedProduct = await productService.deleteProduct(params.id);
    res.status(200).json({
        success: true,
        message: "Producto desactivado correctamente",
        data: updatedProduct,
    });
});
//# sourceMappingURL=product.controller.js.map
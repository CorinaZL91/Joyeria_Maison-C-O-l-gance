import { asyncHandler } from "../utils/asyncHandler.js";
import { categoryService } from "../services/category.service.js";
export const getCategories = asyncHandler(async (_req, res) => {
    const categories = await categoryService.getCategories();
    res.status(200).json({
        success: true,
        data: categories,
    });
});
export const getCategoryById = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const category = await categoryService.getCategoryById(id);
    res.status(200).json({
        success: true,
        data: category,
    });
});
export const createCategory = asyncHandler(async (req, res) => {
    const newCategory = await categoryService.createCategory(req.body);
    res.status(201).json({
        success: true,
        message: "Categoría creada correctamente",
        data: newCategory,
    });
});
export const updateCategory = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    const updatedCategory = await categoryService.updateCategory(id, req.body);
    res.status(200).json({
        success: true,
        message: "Categoría actualizada correctamente",
        data: updatedCategory,
    });
});
export const deleteCategory = asyncHandler(async (req, res) => {
    const id = Number(req.params.id);
    await categoryService.deleteCategory(id);
    res.status(200).json({
        success: true,
        message: "Categoría eliminada correctamente",
    });
});
//# sourceMappingURL=category.controller.js.map
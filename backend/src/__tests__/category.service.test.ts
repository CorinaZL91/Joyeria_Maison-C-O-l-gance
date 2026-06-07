import { jest, describe, beforeEach, test, expect } from '@jest/globals';

jest.mock('../repositories/category.repository.js', () => ({
  categoryRepository: {
    findAll: jest.fn(),
    findByIdWithProducts: jest.fn(),
    findByName: jest.fn(),
    create: jest.fn(),
    findById: jest.fn(),
    findByNameExceptId: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
}));

import { categoryService } from '../services/category.service.js';
import { categoryRepository } from '../repositories/category.repository.js';

const repo = categoryRepository as any;

describe('categoryService', () => {
  beforeEach(() => jest.clearAllMocks());

  test('getCategories delega al repositorio', async () => {
    repo.findAll.mockResolvedValue([{ id: 1 }]);
    await expect(categoryService.getCategories()).resolves.toEqual([{ id: 1 }]);
  });

  test('getCategoryById devuelve categoría o 404', async () => {
    repo.findByIdWithProducts.mockResolvedValueOnce({ id: 1, productos: [] });
    await expect(categoryService.getCategoryById(1)).resolves.toMatchObject({ id: 1 });
    repo.findByIdWithProducts.mockResolvedValueOnce(null);
    await expect(categoryService.getCategoryById(2)).rejects.toMatchObject({ statusCode: 404 });
  });

  test('createCategory valida duplicados y crea descripción nula si no viene', async () => {
    repo.findByName.mockResolvedValueOnce({ id: 1 });
    await expect(categoryService.createCategory({ nombre: 'Anillos' } as any)).rejects.toMatchObject({ statusCode: 409 });

    repo.findByName.mockResolvedValueOnce(null);
    repo.create.mockResolvedValue({ id: 2, nombre: 'Collares' });
    await expect(categoryService.createCategory({ nombre: 'Collares' } as any)).resolves.toMatchObject({ id: 2 });
    expect(repo.create).toHaveBeenCalledWith({ nombre: 'Collares', descripcion: null });
  });

  test('updateCategory valida existencia, duplicado y campos opcionales', async () => {
    repo.findById.mockResolvedValueOnce(null);
    await expect(categoryService.updateCategory(1, { nombre: 'X' } as any)).rejects.toMatchObject({ statusCode: 404 });

    repo.findById.mockResolvedValueOnce({ id: 1 });
    repo.findByNameExceptId.mockResolvedValueOnce({ id: 2 });
    await expect(categoryService.updateCategory(1, { nombre: 'X' } as any)).rejects.toMatchObject({ statusCode: 409 });

    repo.findById.mockResolvedValueOnce({ id: 1 });
    repo.findByNameExceptId.mockResolvedValueOnce(null);
    repo.update.mockResolvedValue({ id: 1, nombre: 'Nuevo', descripcion: null });
    await expect(categoryService.updateCategory(1, { nombre: 'Nuevo', descripcion: null } as any)).resolves.toMatchObject({ nombre: 'Nuevo' });
  });

  test('deleteCategory valida productos asociados y elimina', async () => {
    repo.findByIdWithProducts.mockResolvedValueOnce(null);
    await expect(categoryService.deleteCategory(1)).rejects.toMatchObject({ statusCode: 404 });

    repo.findByIdWithProducts.mockResolvedValueOnce({ id: 1, productos: [{ id: 5 }] });
    await expect(categoryService.deleteCategory(1)).rejects.toMatchObject({ statusCode: 400 });

    repo.findByIdWithProducts.mockResolvedValueOnce({ id: 1, productos: [] });
    repo.delete.mockResolvedValue(undefined);
    await expect(categoryService.deleteCategory(1)).resolves.toBeUndefined();
  });
});

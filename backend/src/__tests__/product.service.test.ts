import { jest, describe, beforeEach, test, expect } from '@jest/globals';

jest.mock('../repositories/product.repository.js', () => ({
  productRepository: {
    findPublicProducts: jest.fn(), findAdminProducts: jest.fn(), findByIdAdmin: jest.fn(), findByIdPublic: jest.fn(),
    findCategoryById: jest.fn(), findActiveProductByName: jest.fn(), createProduct: jest.fn(),
    findByIdWithTallas: jest.fn(), findProductByNameExceptId: jest.fn(), updateProduct: jest.fn(),
    findById: jest.fn(), deactivateById: jest.fn(),
  },
}));
jest.mock('../utils/stockAlert.util.js', () => ({ syncStockAlert: jest.fn() }));
jest.mock('../utils/cloudinaryUpload.js', () => ({ uploadBufferToCloudinary: jest.fn() }));
jest.mock('../utils/cloudinaryDestroy.js', () => ({ deleteFromCloudinary: jest.fn() }));

import { productService } from '../services/product.service.js';
import { productRepository } from '../repositories/product.repository.js';
import { syncStockAlert } from '../utils/stockAlert.util.js';
import { uploadBufferToCloudinary } from '../utils/cloudinaryUpload.js';
import { deleteFromCloudinary } from '../utils/cloudinaryDestroy.js';
const repo = productRepository as any;

const baseProduct = { id: 1, nombre: 'Anillo', activo: true, usar_tallas: false, stock: 10, tallas: [], imagen_url: 'old-url', imagen_public_id: 'old-id' };

describe('productService', () => {
  beforeEach(() => jest.clearAllMocks());

  test('getProducts y getAdminProducts construyen filtros', async () => {
    repo.findPublicProducts.mockResolvedValue(['public']);
    repo.findAdminProducts.mockResolvedValue(['admin']);
    await expect(productService.getProducts({ search: 'oro', categoria_id: 2 } as any)).resolves.toEqual(['public']);
    expect(repo.findPublicProducts).toHaveBeenCalledWith(expect.objectContaining({ AND: expect.any(Array) }));
    await expect(productService.getAdminProducts({ activo: false } as any)).resolves.toEqual(['admin']);
    expect(repo.findAdminProducts.mock.calls[0][0].AND).toEqual(expect.arrayContaining([expect.objectContaining({ activo: false })]));
  });

  test('getProductById valida admin/public/inactivo/no existe', async () => {
    repo.findByIdPublic.mockResolvedValueOnce(baseProduct);
    await expect(productService.getProductById(1, false)).resolves.toMatchObject({ id: 1 });
    repo.findByIdAdmin.mockResolvedValueOnce(baseProduct);
    await expect(productService.getProductById(1, true)).resolves.toMatchObject({ id: 1 });
    repo.findByIdPublic.mockResolvedValueOnce(null);
    await expect(productService.getProductById(9, false)).rejects.toMatchObject({ statusCode: 404 });
    repo.findByIdPublic.mockResolvedValueOnce({ ...baseProduct, activo: false });
    await expect(productService.getProductById(1, false)).rejects.toMatchObject({ statusCode: 404 });
  });

  test('createProduct crea producto sin tallas y con imagen', async () => {
    repo.findCategoryById.mockResolvedValue({ id: 1 });
    repo.findActiveProductByName.mockResolvedValue(null);
    (uploadBufferToCloudinary as any).mockResolvedValue({ secure_url: 'url', public_id: 'pid' });
    repo.createProduct.mockResolvedValue({ id: 3 });
    const result = await productService.createProduct({ nombre: 'Aretes', descripcion: 'Bonitos', precio: 50, material: 'oro', categoria_id: 1, stock: 8 } as any, { buffer: Buffer.from('x') });
    expect(result).toEqual({ id: 3 });
    expect(repo.createProduct).toHaveBeenCalledWith(expect.objectContaining({ stock: 8, imagen_url: 'url', imagen_public_id: 'pid' }));
    expect(syncStockAlert).toHaveBeenCalledWith(3);
  });

  test('createProduct crea producto con tallas y valida errores', async () => {
    repo.findCategoryById.mockResolvedValueOnce(null);
    await expect(productService.createProduct({ nombre: 'X', categoria_id: 1 } as any)).rejects.toMatchObject({ statusCode: 404 });

    repo.findCategoryById.mockResolvedValueOnce({ id: 1 });
    repo.findActiveProductByName.mockResolvedValueOnce({ id: 9 });
    await expect(productService.createProduct({ nombre: 'X', categoria_id: 1 } as any)).rejects.toMatchObject({ statusCode: 409 });

    repo.findCategoryById.mockResolvedValue({ id: 1 });
    repo.findActiveProductByName.mockResolvedValue(null);
    await expect(productService.createProduct({ nombre: 'X', categoria_id: 1, usar_tallas: true, tallas: [] } as any)).rejects.toMatchObject({ statusCode: 400 });

    repo.createProduct.mockResolvedValueOnce({ id: 4 });
    await productService.createProduct({ nombre: 'X', categoria_id: 1, usar_tallas: true, tallas: [{ talla: '7', stock: 2 }, { talla: '8', stock: 3, activo: false }] } as any);
    expect(repo.createProduct.mock.calls.at(-1)[0]).toEqual(expect.objectContaining({ stock: 2, tallas: { create: [{ talla: '7', stock: 2, activo: true }, { talla: '8', stock: 3, activo: false }] } }));
  });

  test('createProduct elimina imagen subida si falla', async () => {
    repo.findCategoryById.mockResolvedValue({ id: 1 });
    repo.findActiveProductByName.mockResolvedValue(null);
    (uploadBufferToCloudinary as any).mockResolvedValue({ secure_url: 'url', public_id: 'new-id' });
    repo.createProduct.mockRejectedValue(new Error('db'));
    await expect(productService.createProduct({ nombre: 'X', categoria_id: 1 } as any, { buffer: Buffer.from('x') })).rejects.toThrow('db');
    expect(deleteFromCloudinary).toHaveBeenCalledWith('new-id');
  });

  test('updateProduct actualiza campos, tallas e imagen', async () => {
    repo.findByIdWithTallas.mockResolvedValue(baseProduct);
    repo.findCategoryById.mockResolvedValue({ id: 2 });
    repo.findProductByNameExceptId.mockResolvedValue(null);
    (uploadBufferToCloudinary as any).mockResolvedValue({ secure_url: 'new-url', public_id: 'new-id' });
    repo.updateProduct.mockResolvedValue({ id: 1 });
    await productService.updateProduct(1, { nombre: 'Nuevo', categoria_id: 2, usar_tallas: true, tallas: [{ talla: 'CH', stock: 6 }], removeImage: false } as any, { buffer: Buffer.from('x') });
    expect(repo.updateProduct).toHaveBeenCalledWith(1, expect.objectContaining({ nombre: 'Nuevo', stock: 6, tallas: { create: [{ talla: 'CH', stock: 6, activo: true }] } }), true);
    expect(deleteFromCloudinary).toHaveBeenCalledWith('old-id');
  });

  test('updateProduct valida errores y removeImage', async () => {
    repo.findByIdWithTallas.mockResolvedValueOnce(null);
    await expect(productService.updateProduct(1, {} as any)).rejects.toMatchObject({ statusCode: 404 });

    repo.findByIdWithTallas.mockResolvedValueOnce(baseProduct);
    repo.findCategoryById.mockResolvedValueOnce(null);
    await expect(productService.updateProduct(1, { categoria_id: 9 } as any)).rejects.toMatchObject({ statusCode: 404 });

    repo.findByIdWithTallas.mockResolvedValueOnce(baseProduct);
    repo.findProductByNameExceptId.mockResolvedValueOnce({ id: 2 });
    await expect(productService.updateProduct(1, { nombre: 'Duplicado' } as any)).rejects.toMatchObject({ statusCode: 409 });

    repo.findByIdWithTallas.mockResolvedValueOnce({ ...baseProduct, usar_tallas: true, tallas: [] });
    await expect(productService.updateProduct(1, {} as any)).rejects.toMatchObject({ statusCode: 400 });

    repo.findByIdWithTallas.mockResolvedValueOnce(baseProduct);
    repo.updateProduct.mockResolvedValueOnce({ id: 1 });
    await productService.updateProduct(1, { removeImage: true, stock: 2 } as any);
    expect(repo.updateProduct.mock.calls.at(-1)[1]).toEqual(expect.objectContaining({ imagen_url: null, imagen_public_id: null, stock: 2 }));
  });

  test('deleteProduct valida estados y desactiva', async () => {
    repo.findById.mockResolvedValueOnce(null);
    await expect(productService.deleteProduct(1)).rejects.toMatchObject({ statusCode: 404 });
    repo.findById.mockResolvedValueOnce({ activo: false });
    await expect(productService.deleteProduct(1)).rejects.toMatchObject({ statusCode: 400 });
    repo.findById.mockResolvedValueOnce({ activo: true });
    repo.deactivateById.mockResolvedValueOnce({ id: 1, activo: false });
    await expect(productService.deleteProduct(1)).resolves.toMatchObject({ activo: false });
  });
});

describe('productService ramas adicionales', () => {
  beforeEach(() => jest.clearAllMocks());

  test('getProducts sin filtros especiales también funciona', async () => {
    repo.findPublicProducts.mockResolvedValue([]);
    await productService.getProducts({} as any);
    expect(repo.findPublicProducts.mock.calls[0][0]).toEqual(expect.objectContaining({ AND: expect.any(Array) }));
  });

  test('updateProduct conserva tallas existentes activas y actualiza todos los campos sin nueva imagen', async () => {
    repo.findByIdWithTallas.mockResolvedValue({ ...baseProduct, usar_tallas: true, tallas: [{ talla: '7', stock: 2, activo: true }, { talla: '8', stock: 10, activo: false }] });
    repo.updateProduct.mockResolvedValue({ id: 1 });
    await productService.updateProduct(1, { descripcion: 'd', precio: 99, stock_minimo: 2, material: 'plata', activo: false } as any);
    expect(repo.updateProduct).toHaveBeenCalledWith(1, expect.objectContaining({ descripcion: 'd', precio: 99, stock_minimo: 2, material: 'plata', activo: false, stock: 2 }), false);
  });

  test('updateProduct cambia de tallas a stock normal y borra tallas', async () => {
    repo.findByIdWithTallas.mockResolvedValue({ ...baseProduct, usar_tallas: true, tallas: [{ talla: '7', stock: 2, activo: true }] });
    repo.updateProduct.mockResolvedValue({ id: 1 });
    await productService.updateProduct(1, { usar_tallas: false, stock: 12 } as any);
    expect(repo.updateProduct).toHaveBeenCalledWith(1, expect.objectContaining({ usar_tallas: false, stock: 12 }), true);
  });

  test('updateProduct elimina imagen nueva si falla actualización', async () => {
    repo.findByIdWithTallas.mockResolvedValue(baseProduct);
    (uploadBufferToCloudinary as any).mockResolvedValue({ secure_url: 'new-url', public_id: 'new-id' });
    repo.updateProduct.mockRejectedValue(new Error('db'));
    await expect(productService.updateProduct(1, {} as any, { buffer: Buffer.from('x') })).rejects.toThrow('db');
    expect(deleteFromCloudinary).toHaveBeenCalledWith('new-id');
  });

  test('createProduct traduce P2002', async () => {
    const { Prisma } = require('./mocks/prismaClient');
    repo.findCategoryById.mockResolvedValue({ id: 1 });
    repo.findActiveProductByName.mockResolvedValue(null);
    repo.createProduct.mockRejectedValue(new Prisma.PrismaClientKnownRequestError('dup', { code: 'P2002' }));
    await expect(productService.createProduct({ nombre: 'X', categoria_id: 1 } as any)).rejects.toMatchObject({ statusCode: 409 });
  });
});

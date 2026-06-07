import { jest, describe, beforeEach, test, expect } from '@jest/globals';

jest.mock('../repositories/cart.repository.js', () => ({
  cartRepository: {
    findCartByUserId: jest.fn(),
    findProductByIdWithTallas: jest.fn(),
    findCartItem: jest.fn(),
    updateCartItemQuantity: jest.fn(),
    createCartItem: jest.fn(),
    findCartItemWithProductStock: jest.fn(),
    deleteCartItem: jest.fn(),
    clearCartByUserId: jest.fn(),
  },
}));

import { cartService } from '../services/cart.service.js';
import { cartRepository } from '../repositories/cart.repository.js';
const repo = cartRepository as any;

const item = (extra = {}) => ({ id: 1, cantidad: 2, producto: { precio: 100, stock: 10, usar_tallas: false }, productoTalla: null, ...extra });

describe('cartService', () => {
  beforeEach(() => jest.clearAllMocks());

  test('getCart calcula subtotales y total', async () => {
    repo.findCartByUserId.mockResolvedValue([item(), item({ id: 2, cantidad: 1, producto: { precio: '50', stock: 5, usar_tallas: false } })]);
    const result = await cartService.getCart(1);
    expect(result.total).toBe(250);
    expect(result.items[0].subtotal).toBe(200);
  });

  test('addToCart crea producto sin tallas', async () => {
    repo.findProductByIdWithTallas.mockResolvedValue({ id: 10, activo: true, usar_tallas: false, stock: 5, tallas: [] });
    repo.findCartItem.mockResolvedValue(null);
    repo.createCartItem.mockResolvedValue(item({ producto: { precio: 20 } }));
    const result = await cartService.addToCart(1, { producto_id: 10, cantidad: 2 } as any);
    expect(result.alreadyExists).toBe(false);
    expect(repo.createCartItem).toHaveBeenCalledWith(1, 10, null, 2);
  });

  test('addToCart actualiza item existente y valida stock', async () => {
    repo.findProductByIdWithTallas.mockResolvedValue({ id: 10, activo: true, usar_tallas: false, stock: 5, tallas: [] });
    repo.findCartItem.mockResolvedValue({ id: 7, cantidad: 2 });
    repo.updateCartItemQuantity.mockResolvedValue(item({ cantidad: 4 }));
    await expect(cartService.addToCart(1, { producto_id: 10, cantidad: 2 } as any)).resolves.toMatchObject({ alreadyExists: true });

    repo.findCartItem.mockResolvedValue({ id: 7, cantidad: 4 });
    await expect(cartService.addToCart(1, { producto_id: 10, cantidad: 2 } as any)).rejects.toMatchObject({ statusCode: 400 });
  });

  test('addToCart valida producto, tallas y stock', async () => {
    repo.findProductByIdWithTallas.mockResolvedValueOnce(null);
    await expect(cartService.addToCart(1, { producto_id: 1, cantidad: 1 } as any)).rejects.toMatchObject({ statusCode: 404 });

    repo.findProductByIdWithTallas.mockResolvedValueOnce({ activo: true, usar_tallas: true, tallas: [] });
    await expect(cartService.addToCart(1, { producto_id: 1, cantidad: 1 } as any)).rejects.toMatchObject({ message: 'Debes seleccionar una talla' });

    repo.findProductByIdWithTallas.mockResolvedValueOnce({ activo: true, usar_tallas: true, tallas: [{ id: 5, activo: false, stock: 9 }] });
    await expect(cartService.addToCart(1, { producto_id: 1, cantidad: 1, producto_talla_id: 5 } as any)).rejects.toMatchObject({ message: 'Talla no válida' });

    repo.findProductByIdWithTallas.mockResolvedValueOnce({ activo: true, usar_tallas: false, stock: 0, tallas: [] });
    await expect(cartService.addToCart(1, { producto_id: 1, cantidad: 1 } as any)).rejects.toMatchObject({ message: 'Producto sin stock' });
  });

  test('updateCartItemQuantity actualiza y valida errores', async () => {
    repo.findCartItemWithProductStock.mockResolvedValueOnce(null);
    await expect(cartService.updateCartItemQuantity(1, 1, { cantidad: 1 } as any)).rejects.toMatchObject({ statusCode: 404 });

    repo.findCartItemWithProductStock.mockResolvedValueOnce(item({ producto: { usar_tallas: false, stock: 3 } }));
    repo.updateCartItemQuantity.mockResolvedValueOnce(item({ cantidad: 3 }));
    await expect(cartService.updateCartItemQuantity(1, 1, { cantidad: 3 } as any)).resolves.toMatchObject({ subtotal: 300 });

    repo.findCartItemWithProductStock.mockResolvedValueOnce(item({ producto: { usar_tallas: false, stock: 1 } }));
    await expect(cartService.updateCartItemQuantity(1, 1, { cantidad: 2 } as any)).rejects.toMatchObject({ statusCode: 400 });
  });

  test('removeCartItem y clearCart', async () => {
    repo.findCartItem.mockResolvedValueOnce(null);
    await expect(cartService.removeCartItem(1, 1, {} as any)).rejects.toMatchObject({ statusCode: 404 });
    repo.findCartItem.mockResolvedValueOnce({ id: 3 });
    await expect(cartService.removeCartItem(1, 1, {} as any)).resolves.toBeUndefined();
    await cartService.clearCart(1);
    expect(repo.clearCartByUserId).toHaveBeenCalledWith(1);
  });
});

describe('cartService ramas de tallas', () => {
  beforeEach(() => jest.clearAllMocks());

  test('addToCart crea item con talla válida', async () => {
    repo.findProductByIdWithTallas.mockResolvedValue({ activo: true, usar_tallas: true, tallas: [{ id: 5, activo: true, stock: 4 }] });
    repo.findCartItem.mockResolvedValue(null);
    repo.createCartItem.mockResolvedValue(item({ productoTalla: { id: 5 }, producto: { precio: 30 } }));
    await expect(cartService.addToCart(1, { producto_id: 10, cantidad: 2, producto_talla_id: 5 } as any)).resolves.toMatchObject({ cartItem: { producto_talla: { id: 5 } } });
    expect(repo.createCartItem).toHaveBeenCalledWith(1, 10, 5, 2);
  });

  test('addToCart valida talla sin stock y producto sin tallas con producto_talla_id', async () => {
    repo.findProductByIdWithTallas.mockResolvedValueOnce({ activo: true, usar_tallas: true, tallas: [{ id: 5, activo: true, stock: 0 }] });
    await expect(cartService.addToCart(1, { producto_id: 1, cantidad: 1, producto_talla_id: 5 } as any)).rejects.toMatchObject({ message: 'Esa talla no tiene stock disponible' });

    repo.findProductByIdWithTallas.mockResolvedValueOnce({ activo: true, usar_tallas: false, stock: 5, tallas: [] });
    await expect(cartService.addToCart(1, { producto_id: 1, cantidad: 1, producto_talla_id: 5 } as any)).rejects.toMatchObject({ message: expect.stringContaining('no usa tallas') });
  });

  test('updateCartItemQuantity valida tallas inactivas y stock', async () => {
    repo.findCartItemWithProductStock.mockResolvedValueOnce(item({ producto: { usar_tallas: true }, productoTalla: null }));
    await expect(cartService.updateCartItemQuantity(1, 1, { cantidad: 1 } as any)).rejects.toMatchObject({ message: 'La talla seleccionada ya no está disponible' });

    repo.findCartItemWithProductStock.mockResolvedValueOnce(item({ producto: { usar_tallas: true }, productoTalla: { activo: true, stock: 5 } }));
    repo.updateCartItemQuantity.mockResolvedValueOnce(item({ cantidad: 5, productoTalla: { activo: true, stock: 5 } }));
    await expect(cartService.updateCartItemQuantity(1, 1, { cantidad: 5 } as any)).resolves.toMatchObject({ producto_talla: { activo: true } });

    repo.findCartItemWithProductStock.mockResolvedValueOnce(item({ producto: { usar_tallas: false, stock: null } }));
    await expect(cartService.updateCartItemQuantity(1, 1, { cantidad: 1 } as any)).rejects.toMatchObject({ message: 'Producto sin stock disponible' });
  });
});

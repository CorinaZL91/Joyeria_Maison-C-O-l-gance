import { jest, describe, test, expect, beforeEach } from '@jest/globals';
import { AppError } from '../utils/appError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { parseOptionalBoolean, parseOptionalNumber, normalizeTallaText, parseTallasInput, sumActiveTallasStock } from '../utils/productInput.util.js';
import { generateToken, verifyToken } from '../utils/jwt.js';
import { hashPassword, comparePassword } from '../utils/hash.js';

describe('utils generales', () => {
  test('AppError conserva statusCode e isOperational', () => {
    const error = new AppError('Error controlado', 418);
    expect(error.message).toBe('Error controlado');
    expect(error.statusCode).toBe(418);
    expect(error.isOperational).toBe(true);
  });

  test('asyncHandler pasa errores a next', async () => {
    const next = jest.fn();
    const handler = asyncHandler(async () => { throw new Error('boom'); });
    handler({} as any, {} as any, next as any);
    await new Promise(process.nextTick);
    expect(next).toHaveBeenCalledWith(expect.any(Error));
  });

  test('parseOptionalBoolean y parseOptionalNumber cubren valores válidos e inválidos', () => {
    expect(parseOptionalBoolean(undefined)).toBeUndefined();
    expect(parseOptionalBoolean(null)).toBeUndefined();
    expect(parseOptionalBoolean('')).toBeUndefined();
    expect(parseOptionalBoolean(true)).toBe(true);
    expect(parseOptionalBoolean(' TRUE ')).toBe(true);
    expect(parseOptionalBoolean('false')).toBe(false);
    expect(parseOptionalBoolean('x')).toBeUndefined();
    expect(parseOptionalNumber('10')).toBe(10);
    expect(parseOptionalNumber('abc')).toBeUndefined();
    expect(parseOptionalNumber('')).toBeUndefined();
  });

  test('parseTallasInput normaliza arreglo y valida errores', () => {
    expect(normalizeTallaText('  7 ')).toBe('7');
    expect(parseTallasInput(undefined)).toBeUndefined();
    expect(parseTallasInput('[{"talla":"7","stock":2}]')).toEqual([{ talla: '7', stock: 2, activo: true }]);
    expect(parseTallasInput([{ talla: '8', stock: 0, activo: false }])).toEqual([{ talla: '8', stock: 0, activo: false }]);
    expect(sumActiveTallasStock([{ talla: '7', stock: 2, activo: true }, { talla: '8', stock: 9, activo: false }])).toBe(2);

    expect(() => parseTallasInput('{bad')).toThrow(AppError);
    expect(() => parseTallasInput({})).toThrow('Las tallas deben enviarse como un arreglo');
    expect(() => parseTallasInput([null])).toThrow('es inválida');
    expect(() => parseTallasInput([{ talla: '', stock: 1 }])).toThrow('obligatoria');
    expect(() => parseTallasInput([{ talla: '7', stock: -1 }])).toThrow('entero mayor o igual');
    expect(() => parseTallasInput([{ talla: '7', stock: 1 }, { talla: '7', stock: 2 }])).toThrow('repetidas');
  });

  test('jwt genera y verifica token; falla sin secreto', () => {
    process.env.JWT_SECRET = 'test-secret';
    const token = generateToken({ userId: 1, rol: 'cliente' as any });
    expect(verifyToken(token)).toMatchObject({ userId: 1, rol: 'cliente' });
    const old = process.env.JWT_SECRET;
    delete process.env.JWT_SECRET;
    expect(() => generateToken({ userId: 1, rol: 'cliente' as any })).toThrow('JWT_SECRET');
    expect(() => verifyToken(token)).toThrow('JWT_SECRET');
    process.env.JWT_SECRET = old;
  });

  test('hashPassword y comparePassword funcionan', async () => {
    const hashed = await hashPassword('secreto123');
    await expect(comparePassword('secreto123', hashed)).resolves.toBe(true);
    await expect(comparePassword('otro', hashed)).resolves.toBe(false);
  });
});

import { jest, describe, beforeEach, test, expect } from '@jest/globals';

jest.mock('../utils/jwt.js', () => ({ verifyToken: jest.fn() }));

import { authenticate } from '../middlewares/auth.middleware.js';
import { authorizeRole } from '../middlewares/role.middleware.js';
import { errorMiddleware } from '../middlewares/error.middleware.js';
import { validate } from '../middlewares/validate.middleware.js';
import { AppError } from '../utils/appError.js';
import { verifyToken } from '../utils/jwt.js';
import { z } from 'zod';

const res = () => {
  const r: any = { status: jest.fn().mockReturnThis(), json: jest.fn().mockReturnThis() };
  return r;
};

describe('middlewares', () => {
  beforeEach(() => jest.clearAllMocks());

  test('authenticate acepta token por header o cookie', () => {
    (verifyToken as any).mockReturnValue({ userId: 1, rol: 'cliente' });
    const req: any = { headers: { authorization: 'Bearer abc' }, cookies: {} };
    const response = res();
    const next = jest.fn();
    authenticate(req, response, next as any);
    expect(req.user).toEqual({ userId: 1, rol: 'cliente' });
    expect(next).toHaveBeenCalled();

    const reqCookie: any = { headers: {}, cookies: { token: 'cookie-token' } };
    authenticate(reqCookie, res(), next as any);
    expect(verifyToken).toHaveBeenCalledWith('cookie-token');
  });

  test('authenticate responde 401 sin token o token inválido', () => {
    const r1 = res();
    authenticate({ headers: {}, cookies: {} } as any, r1, jest.fn() as any);
    expect(r1.status).toHaveBeenCalledWith(401);

    (verifyToken as any).mockImplementation(() => { throw new Error('bad'); });
    const r2 = res();
    authenticate({ headers: { authorization: 'Bearer abc' }, cookies: {} } as any, r2, jest.fn() as any);
    expect(r2.json).toHaveBeenCalledWith(expect.objectContaining({ message: 'Token inválido o expirado' }));
  });

  test('authorizeRole valida autenticación, permisos y éxito', () => {
    const next = jest.fn();
    const r1 = res();
    authorizeRole('administrador' as any)({} as any, r1, next as any);
    expect(r1.status).toHaveBeenCalledWith(401);

    const r2 = res();
    authorizeRole('administrador' as any)({ user: { rol: 'cliente' } } as any, r2, next as any);
    expect(r2.status).toHaveBeenCalledWith(403);

    authorizeRole('cliente' as any)({ user: { rol: 'cliente' } } as any, res(), next as any);
    expect(next).toHaveBeenCalled();
  });

  test('validate parsea body params query y maneja errores', () => {
    const middleware = validate({
      body: z.object({ nombre: z.string().min(1) }),
      params: z.object({ id: z.coerce.number() }),
      query: z.object({ activo: z.coerce.boolean().optional() }),
    });
    const req: any = { body: { nombre: 'Anillo' }, params: { id: '5' }, query: { activo: 'true' } };
    const next = jest.fn();
    middleware(req, res(), next as any);
    expect(req.params.id).toBe(5);
    expect(next).toHaveBeenCalled();

    const rBad = res();
    middleware({ body: {}, params: {}, query: {} } as any, rBad, jest.fn() as any);
    expect(rBad.status).toHaveBeenCalledWith(400);
  });

  test('errorMiddleware responde AppError y errores genéricos', () => {
    const r1 = res();
    errorMiddleware(new AppError('Controlado', 409), {} as any, r1, jest.fn() as any);
    expect(r1.status).toHaveBeenCalledWith(409);

    const r2 = res();
    errorMiddleware(new Error('No controlado'), {} as any, r2, jest.fn() as any);
    expect(r2.status).toHaveBeenCalledWith(500);
  });
});

describe('errorMiddleware ramas adicionales', () => {
  test('maneja ZodError y Prisma P2002', () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined);
    const rZod = res();
    errorMiddleware(new z.ZodError([]), {} as any, rZod, jest.fn() as any);
    expect(rZod.status).toHaveBeenCalledWith(400);

    const { Prisma } = require('./mocks/prismaClient');
    const rPrisma = res();
    errorMiddleware(new Prisma.PrismaClientKnownRequestError('dup', { code: 'P2002' }), {} as any, rPrisma, jest.fn() as any);
    expect(rPrisma.status).toHaveBeenCalledWith(409);
    (console.error as any).mockRestore();
  });

  test('validate maneja error interno no Zod', () => {
    const schema: any = { parse: () => { throw new Error('interno'); } };
    const r = res();
    validate({ body: schema })({ body: {} } as any, r, jest.fn() as any);
    expect(r.status).toHaveBeenCalledWith(500);
  });
});

describe('validate ramas opcionales', () => {
  test('funciona con schemas parciales o sin schemas', () => {
    const next1 = jest.fn();
    validate({})({} as any, res(), next1 as any);
    expect(next1).toHaveBeenCalled();

    const next2 = jest.fn();
    validate({ params: z.object({ id: z.coerce.number() }) })({ params: { id: '1' } } as any, res(), next2 as any);
    expect(next2).toHaveBeenCalled();

    const next3 = jest.fn();
    validate({ query: z.object({ q: z.string() }) })({ query: { q: 'x' } } as any, res(), next3 as any);
    expect(next3).toHaveBeenCalled();
  });
});

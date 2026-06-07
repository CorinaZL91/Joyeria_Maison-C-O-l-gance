import { jest, describe, beforeEach, test, expect } from '@jest/globals';

jest.mock('../repositories/auth.repository.js', () => ({
  authRepository: {
    findUserByEmail: jest.fn(),
    createClientUser: jest.fn(),
    findUserByEmailWithPassword: jest.fn(),
    findUserById: jest.fn(),
  },
}));

jest.mock('../utils/hash.js', () => ({
  hashPassword: jest.fn(),
  comparePassword: jest.fn(),
}));

jest.mock('../utils/jwt.js', () => ({
  generateToken: jest.fn(),
}));

import { authService } from '../services/auth.service.js';
import { authRepository } from '../repositories/auth.repository.js';
import { hashPassword, comparePassword } from '../utils/hash.js';
import { generateToken } from '../utils/jwt.js';
import { AppError } from '../utils/appError.js';

const repo = authRepository as any;
const hash = hashPassword as any;
const compare = comparePassword as any;
const token = generateToken as any;

describe('authService', () => {
  beforeEach(() => jest.clearAllMocks());

  test('register crea usuario, normaliza correo y devuelve token', async () => {
    repo.findUserByEmail.mockResolvedValue(null);
    hash.mockResolvedValue('hashed');
    repo.createClientUser.mockResolvedValue({ id: 1, nombre: 'Cori', correo: 'cori@test.com', rol: 'cliente' });
    token.mockReturnValue('jwt-token');

    const result = await authService.register({ nombre: 'Cori', correo: 'CORI@TEST.COM', password: '12345678', telefono: '1234567890' } as any);

    expect(repo.findUserByEmail).toHaveBeenCalledWith('cori@test.com');
    expect(repo.createClientUser).toHaveBeenCalledWith(expect.objectContaining({ correo: 'cori@test.com', password_hash: 'hashed' }));
    expect(result.token).toBe('jwt-token');
  });

  test('register falla si el correo ya existe', async () => {
    repo.findUserByEmail.mockResolvedValue({ id: 1 });
    await expect(authService.register({ nombre: 'Cori', correo: 'cori@test.com', password: '12345678' } as any)).rejects.toMatchObject({ statusCode: 409 });
  });

  test('login devuelve usuario sin password_hash', async () => {
    repo.findUserByEmailWithPassword.mockResolvedValue({ id: 1, correo: 'cori@test.com', password_hash: 'hashed', rol: 'cliente' });
    compare.mockResolvedValue(true);
    token.mockReturnValue('jwt-login');

    const result = await authService.login({ correo: 'CORI@TEST.COM', password: '12345678' } as any);

    expect(compare).toHaveBeenCalledWith('12345678', 'hashed');
    expect(result).toEqual({ token: 'jwt-login', user: { id: 1, correo: 'cori@test.com', rol: 'cliente' } });
  });

  test('login falla si usuario no existe o contraseña es incorrecta', async () => {
    repo.findUserByEmailWithPassword.mockResolvedValueOnce(null);
    await expect(authService.login({ correo: 'x@test.com', password: 'bad' } as any)).rejects.toMatchObject({ statusCode: 401 });

    repo.findUserByEmailWithPassword.mockResolvedValueOnce({ id: 1, password_hash: 'hashed', rol: 'cliente' });
    compare.mockResolvedValueOnce(false);
    await expect(authService.login({ correo: 'x@test.com', password: 'bad' } as any)).rejects.toMatchObject({ statusCode: 401 });
  });

  test('me devuelve usuario o lanza 404', async () => {
    repo.findUserById.mockResolvedValueOnce({ id: 1, nombre: 'Cori' });
    await expect(authService.me(1)).resolves.toEqual({ id: 1, nombre: 'Cori' });
    repo.findUserById.mockResolvedValueOnce(null);
    await expect(authService.me(99)).rejects.toBeInstanceOf(AppError);
  });
});

describe('authService errores Prisma', () => {
  beforeEach(() => jest.clearAllMocks());

  test('register traduce P2002 de correo, teléfono y dato duplicado', async () => {
    const { Prisma } = require('./mocks/prismaClient');
    repo.findUserByEmail.mockResolvedValue(null);
    hash.mockResolvedValue('hashed');

    repo.createClientUser.mockRejectedValueOnce(new Prisma.PrismaClientKnownRequestError('dup', { code: 'P2002', meta: { target: ['correo'] } }));
    await expect(authService.register({ nombre: 'Cori', correo: 'a@test.com', password: '12345678' } as any)).rejects.toMatchObject({ message: 'Ya existe un usuario con ese correo', statusCode: 409 });

    repo.createClientUser.mockRejectedValueOnce(new Prisma.PrismaClientKnownRequestError('dup', { code: 'P2002', meta: { target: ['telefono'] } }));
    await expect(authService.register({ nombre: 'Cori', correo: 'b@test.com', password: '12345678' } as any)).rejects.toMatchObject({ message: 'Ya existe un usuario con ese teléfono', statusCode: 409 });

    repo.createClientUser.mockRejectedValueOnce(new Prisma.PrismaClientKnownRequestError('dup', { code: 'P2002', meta: { target: ['otro'] } }));
    await expect(authService.register({ nombre: 'Cori', correo: 'c@test.com', password: '12345678' } as any)).rejects.toMatchObject({ message: 'Ya existe un dato duplicado', statusCode: 409 });
  });
});

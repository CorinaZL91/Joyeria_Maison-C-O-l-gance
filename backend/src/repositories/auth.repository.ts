import { Prisma, RolUsuario } from "../../generated/prisma/client.js";
import { prisma } from "../config/prisma.js";

const publicUserSelect = {
  id: true,
  nombre: true,
  correo: true,
  telefono: true,
  direccion: true,
  direccion_calle: true,
  direccion_ciudad: true,
  direccion_codigo_postal: true,
  rol: true,
} satisfies Prisma.UsuarioSelect;

export const authRepository = {
  findUserByEmail: async (correo: string) => {
    return prisma.usuario.findUnique({
      where: { correo },
    });
  },

  findUserByEmailWithPassword: async (correo: string) => {
    return prisma.usuario.findUnique({
      where: { correo },
      select: {
        ...publicUserSelect,
        password_hash: true,
      },
    });
  },

  findUserById: async (id: number) => {
    return prisma.usuario.findUnique({
      where: { id },
      select: publicUserSelect,
    });
  },

  createClientUser: async (data: {
    nombre: string;
    correo: string;
    password_hash: string;
    telefono: string;
  }) => {
    return prisma.usuario.create({
      data: {
        nombre: data.nombre,
        correo: data.correo,
        password_hash: data.password_hash,
        telefono: data.telefono,
        rol: RolUsuario.cliente,
      },
      select: publicUserSelect,
    });
  },
};

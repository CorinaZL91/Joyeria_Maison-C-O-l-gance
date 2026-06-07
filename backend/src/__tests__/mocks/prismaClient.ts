export const RolUsuario = { administrador: 'administrador', cliente: 'cliente' } as const;
export const EstadoPedido = { pendiente: 'pendiente', pagado: 'pagado', enviado: 'enviado', entregado: 'entregado', cancelado: 'cancelado' } as const;
export const MetodoPago = { tarjeta: 'tarjeta', efectivo: 'efectivo', transferencia: 'transferencia' } as const;
export const Prisma = {
  PrismaClientKnownRequestError: class PrismaClientKnownRequestError extends Error {
    code: string;
    meta?: unknown;
    constructor(message = 'Prisma error', opts: { code?: string; meta?: unknown } = {}) {
      super(message);
      this.code = opts.code ?? 'P2002';
      this.meta = opts.meta;
    }
  },
};

// src/app/models/Order.ts

export type MetodoPago = "tarjeta" | "tienda";

export type EstadoPedido =
  | "pendiente"
  | "en_preparacion"
  | "enviado"
  | "entregado"
  | "cancelado";

export interface OrderUser {
  id: number;
  nombre: string;
  correo: string;
  telefono?: string | null;
  direccion?: string | null;
  direccion_calle?: string | null;
  direccion_ciudad?: string | null;
  direccion_codigo_postal?: string | null;
}

export interface OrderProduct {
  id: number;
  nombre: string;
  precio?: string | number;
  imagen_url?: string | null;
  material?: string | null;
  usar_tallas?: boolean;
}

export interface OrderProductSize {
  id: number;
  talla: string;
  stock?: number;
  activo?: boolean;
}

export interface OrderDetail {
  id: number;
  pedido_id?: number;
  producto_id?: number;
  producto_talla_id?: number | null;
  cantidad: number;
  precio_unitario: string | number;
  subtotal: string | number;
  producto?: OrderProduct | null;
  producto_talla?: OrderProductSize | null;
}

export interface Order {
  id: number;
  usuario_id: number;
  fecha_pedido: string;
  total: string | number;
  metodo_pago: MetodoPago;
  estado: EstadoPedido;
  direccion_calle?: string | null;
  direccion_ciudad?: string | null;
  direccion_codigo_postal?: string | null;
  detalles: OrderDetail[];
  usuario?: OrderUser;
}

export interface OrdersResponse {
  success: boolean;
  data: Order[];
}

export interface OrderResponse {
  success: boolean;
  data: Order;
}

export interface MessageResponse {
  success: boolean;
  message: string;
  data?: Order;
}

export interface CreateOrderPayload {
  metodo_pago: MetodoPago;
  direccion_calle?: string;
  direccion_ciudad?: string;
  direccion_codigo_postal?: string;
}

export interface UpdateOrderStatusPayload {
  id: number;
  estado: EstadoPedido;
}

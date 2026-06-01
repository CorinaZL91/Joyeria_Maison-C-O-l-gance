// src/app/models/Cart.ts

export interface CartProductCategory {
  id: number;
  nombre: string;
}

export interface CartProduct {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number | string;
  material: string;
  stock: number;
  imagen_url?: string | null;
  activo: boolean;
  usar_tallas?: boolean;
  categoria?: CartProductCategory;
}

export interface CartProductSize {
  id: number;
  talla: string;
  stock: number;
  activo: boolean;
}

export interface CartItem {
  id: number;
  usuario_id: number;
  producto_id: number;
  producto_talla_id?: number | null;
  cantidad: number;
  fecha_agregado: string;
  subtotal?: number;
  producto: CartProduct;
  producto_talla?: CartProductSize | null;
}

export interface CartResponse {
  items: CartItem[];
  total: number;
}

export interface AddToCartPayload {
  producto_id: number;
  cantidad: number;
  producto_talla_id?: number | null;
}

export interface UpdateCartPayload {
  producto_id: number;
  cantidad: number;
  producto_talla_id?: number | null;
}

export interface RemoveCartPayload {
  producto_id: number;
  producto_talla_id?: number | null;
}

export interface ApiMessageResponse<T = unknown> {
  success: boolean;
  message?: string;
  data: T;
}

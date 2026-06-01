// src/app/models/Product.ts

export interface ProductCategory {
  id: number;
  nombre: string;
  descripcion?: string | null;
  slug?: string;
  activa?: boolean;
}

export interface ProductSize {
  id: number;
  talla: string;
  stock: number;
  activo: boolean;
  fecha_creada?: string;
  producto_id?: number;
}

export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  material: string;
  usar_tallas: boolean;
  stock: number | null;
  stock_minimo: number;
  imagen_url: string | null;
  imagen_public_id: string | null;
  activo: boolean;
  fecha_creacion: string;
  categoria_id: number;
  categoria: ProductCategory;
  tallas?: ProductSize[];
}

export interface GetProductsParams {
  categoria_id?: number;
  activo?: boolean;
  search?: string;
}

export interface GetProductsResponse {
  success: boolean;
  data: Product[];
}

export interface GetProductResponse {
  success: boolean;
  data: Product;
}

export interface ProductSizePayload {
  talla: string;
  stock: number;
  activo?: boolean;
}

export interface CreateProductPayload {
  nombre: string;
  descripcion: string;
  precio: number | string;
  material: string;
  usar_tallas?: boolean;
  stock?: number;
  stock_minimo: number;
  categoria_id: number;
  activo?: boolean;
  imagen?: File | null;
  tallas?: ProductSizePayload[];
}

export interface UpdateProductPayload {
  id: number;
  nombre?: string;
  descripcion?: string;
  precio?: number | string;
  material?: string;
  usar_tallas?: boolean;
  stock?: number;
  stock_minimo?: number;
  categoria_id?: number;
  activo?: boolean;
  imagen?: File | null;
  tallas?: ProductSizePayload[];
  removeImage?: boolean;
}

export interface DeleteProductResponse {
  success: boolean;
  message: string;
  data?: Product;
}

export type ProductFormDataPayload = {
  nombre?: string;
  descripcion?: string;
  precio?: number | string;
  material?: string;
  usar_tallas?: boolean;
  stock?: number;
  stock_minimo?: number;
  categoria_id?: number;
  activo?: boolean;
  imagen?: File | null;
  tallas?: ProductSizePayload[];
  removeImage?: boolean;
};

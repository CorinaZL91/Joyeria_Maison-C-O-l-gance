export interface Category {
  id: number;
  nombre: string;
  descripcion?: string | null;
  activa?: boolean;
  fecha_creacion?: string;
}

export interface GetCategoriesResponse {
  success: boolean;
  data: Category[];
}

export interface GetCategoryResponse {
  success: boolean;
  data: Category;
}

export interface CreateCategoryPayload {
  nombre: string;
  descripcion?: string;
}

export interface UpdateCategoryPayload {
  id: number;
  nombre?: string;
  descripcion?: string;
  activa?: boolean;
}

export interface CategoryMessageResponse {
  success: boolean;
  message: string;
  data?: Category;
}

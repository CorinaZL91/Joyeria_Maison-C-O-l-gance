// src/app/models/Auth.ts

export type UserRole = "cliente" | "administrador";

export interface AuthUser {
  id: number;
  nombre: string;
  correo: string;
  telefono?: string | null;
  direccion?: string | null;
  direccion_calle?: string | null;
  direccion_ciudad?: string | null;
  direccion_codigo_postal?: string | null;
  rol: UserRole;
}

export interface LoginRequest {
  correo: string;
  password: string;
  recaptchaToken: string;
}

export interface RegisterRequest {
  nombre: string;
  correo: string;
  password: string;
  telefono: string;
  recaptchaToken: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: AuthUser;
  };
}

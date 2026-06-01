// src/app/models/Alert.ts

export interface AlertProduct {
  id: number;
  nombre: string;
  stock: number;
  stock_minimo: number;
  imagen_url?: string | null;
  categoria_id?: number;
}

export interface AlertCategory {
  id: number;
  nombre: string;
  slug?: string;
  activa?: boolean;
}

export interface StockAlert {
  id: number;
  producto_id: number;
  categoria_id?: number | null;
  activa: boolean;
  fecha_alerta: string;
  producto?: AlertProduct | null;
  categoria?: AlertCategory | null;
}

export interface AlertsResponse {
  success: boolean;
  data: StockAlert[];
}

export interface AlertResponse {
  success: boolean;
  data: StockAlert;
}

export interface AlertMessageResponse {
  success: boolean;
  message: string;
  data?: StockAlert;
}

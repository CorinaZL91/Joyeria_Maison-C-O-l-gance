import { AppError } from "./appError.js";

export type ParsedTallaInput = {
  talla: string;
  stock: number;
  activo?: boolean;
};

export const parseOptionalBoolean = (value: unknown): boolean | undefined => {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "boolean") return value;

  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    if (normalized === "true") return true;
    if (normalized === "false") return false;
  }

  return undefined;
};

export const parseOptionalNumber = (value: unknown): number | undefined => {
  if (value === undefined || value === null || value === "") return undefined;
  const parsed = Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
};

export const normalizeTallaText = (value: unknown): string => {
  return String(value ?? "").trim();
};

export const parseTallasInput = (
  value: unknown
): ParsedTallaInput[] | undefined => {
  if (value === undefined || value === null || value === "") return undefined;

  let rawValue = value;

  if (typeof rawValue === "string") {
    try {
      rawValue = JSON.parse(rawValue);
    } catch {
      throw new AppError(
        "El formato de tallas es inválido. Debe enviarse como arreglo JSON válido",
        400
      );
    }
  }

  if (!Array.isArray(rawValue)) {
    throw new AppError("Las tallas deben enviarse como un arreglo", 400);
  }

  const parsed = rawValue.map((item, index) => {
    if (!item || typeof item !== "object") {
      throw new AppError(
        `La talla en la posición ${index + 1} es inválida`,
        400
      );
    }

    const talla = normalizeTallaText((item as Record<string, unknown>).talla);
    const stock = Number((item as Record<string, unknown>).stock);
    const activo = parseOptionalBoolean(
      (item as Record<string, unknown>).activo
    );

    if (!talla) {
      throw new AppError(
        `La talla en la posición ${index + 1} es obligatoria`,
        400
      );
    }

    if (Number.isNaN(stock) || stock < 0 || !Number.isInteger(stock)) {
      throw new AppError(
        `El stock de la talla "${talla}" debe ser un entero mayor o igual a 0`,
        400
      );
    }

    return {
      talla,
      stock,
      activo: activo ?? true,
    };
  });

  const normalizedNames = parsed.map((item) => item.talla.toLowerCase());
  const uniqueNames = new Set(normalizedNames);

  if (uniqueNames.size !== normalizedNames.length) {
    throw new AppError(
      "No se permiten tallas repetidas en el mismo producto",
      400
    );
  }

  return parsed;
};

export const sumActiveTallasStock = (tallas: ParsedTallaInput[]): number => {
  return tallas
    .filter((item) => item.activo !== false)
    .reduce((acc, item) => acc + item.stock, 0);
};
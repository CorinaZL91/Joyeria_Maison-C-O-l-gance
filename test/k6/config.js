export const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

export const TEST_USER = {
  correo: __ENV.TEST_USER_EMAIL || 'maria@correo.com',
  password: __ENV.TEST_USER_PASSWORD || '12345',
};

export const ADMIN_USER = {
  correo: __ENV.ADMIN_EMAIL || 'admin@maisonco.com',
  password: __ENV.ADMIN_PASSWORD || '12345',
};

export const PRODUCT_ID = Number(__ENV.PRODUCT_ID || 1);

export function jsonHeaders(extra = {}) {
  return {
    headers: {
      ...DEFAULT_HEADERS,
      ...extra,
    },
  };
}

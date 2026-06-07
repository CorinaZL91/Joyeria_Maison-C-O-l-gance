import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, TEST_USER, PRODUCT_ID, jsonHeaders } from './config.js';

export const options = {
  scenarios: {
    compra_simultanea_ultimo_producto: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: 10,
      maxDuration: '30s',
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.20'],
    http_req_duration: ['p(95)<2500'],
  },
};

function login() {
  const res = http.post(`${BASE_URL}/auth/login`, JSON.stringify(TEST_USER), jsonHeaders());
  return res.cookies?.token?.[0]?.value;
}

export default function () {
  const token = login();
  if (!token) return;

  const authHeaders = jsonHeaders({ Authorization: `Bearer ${token}` });

  const add = http.post(
    `${BASE_URL}/cart/items`,
    JSON.stringify({ producto_id: PRODUCT_ID, cantidad: 1 }),
    authHeaders
  );

  check(add, {
    'producto agregado o validación de stock': (r) => [200, 201, 400, 409].includes(r.status),
  });

  const order = http.post(
    `${BASE_URL}/orders`,
    JSON.stringify({ metodo_pago: 'tienda' }),
    authHeaders
  );

  check(order, {
    'pedido creado o rechazado controladamente': (r) => [201, 400, 409].includes(r.status),
  });

  sleep(1);
}

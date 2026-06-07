import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { BASE_URL, TEST_USER, PRODUCT_ID, jsonHeaders } from './config.js';

export const options = {
  vus: 5,
  duration: '45s',
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<1500'],
    checks: ['rate>0.90'],
  },
};

function login() {
  const res = http.post(`${BASE_URL}/auth/login`, JSON.stringify(TEST_USER), jsonHeaders());
  check(res, { 'login 200': (r) => r.status === 200 });
  return res.cookies?.token?.[0]?.value;
}

export default function () {
  const token = login();

  if (!token) {
    return;
  }

  const authHeaders = jsonHeaders({ Authorization: `Bearer ${token}` });

  group('flujo autenticado: perfil y carrito', () => {
    const me = http.get(`${BASE_URL}/auth/me`, authHeaders);
    check(me, { 'perfil autenticado 200': (r) => r.status === 200 });

    const cart = http.get(`${BASE_URL}/cart`, authHeaders);
    check(cart, { 'carrito 200': (r) => r.status === 200 });

    const add = http.post(
      `${BASE_URL}/cart/items`,
      JSON.stringify({ producto_id: PRODUCT_ID, cantidad: 1 }),
      authHeaders
    );
    check(add, {
      'agregar al carrito 200 o 201': (r) => r.status === 200 || r.status === 201,
    });
  });

  sleep(1);
}

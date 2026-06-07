import http from 'k6/http';
import { check, sleep } from 'k6';
import { BASE_URL, jsonHeaders } from './config.js';

export const options = {
  vus: 1,
  duration: '20s',
  thresholds: {
    http_req_failed: ['rate<0.01'],
    http_req_duration: ['p(95)<1200'],
  },
};

export default function () {
  const home = http.get(`${BASE_URL}/`);
  check(home, {
    'API responde 200': (r) => r.status === 200,
    'respuesta incluye success=true': (r) => r.json('success') === true,
  });

  const products = http.get(`${BASE_URL}/products`);
  check(products, {
    'catálogo responde 200': (r) => r.status === 200,
  });

  const categories = http.get(`${BASE_URL}/categories`);
  check(categories, {
    'categorías responde 200': (r) => r.status === 200,
  });

  sleep(1);
}

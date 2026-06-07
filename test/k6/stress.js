import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { BASE_URL, PRODUCT_ID, jsonHeaders } from './config.js';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '20s', target: 50 },
    { duration: '20s', target: 50 },
    { duration: '20s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.05'],
    http_req_duration: ['p(95)<2000'],
    checks: ['rate>0.90'],
  },
};

export default function () {
  group('estrés sobre endpoints públicos', () => {
    const products = http.get(`${BASE_URL}/products`);
    check(products, { 'catálogo responde 200 bajo estrés': (r) => r.status === 200 });

    const product = http.get(`${BASE_URL}/products/${PRODUCT_ID}`);
    check(product, { 'detalle responde 200 bajo estrés': (r) => r.status === 200 });

    const categories = http.get(`${BASE_URL}/categories`);
    check(categories, { 'categorías responden 200 bajo estrés': (r) => r.status === 200 });
  });

  sleep(1);
}

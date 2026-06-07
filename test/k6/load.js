import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { BASE_URL, PRODUCT_ID, jsonHeaders } from './config.js';

export const options = {
  stages: [
    { duration: '15s', target: 10 },
    { duration: '45s', target: 10 },
    { duration: '15s', target: 0 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'],
    http_req_duration: ['p(95)<1200'],
    checks: ['rate>0.95'],
  },
};

export default function () {
  group('consulta pública de catálogo', () => {
    const responses = http.batch([
      ['GET', `${BASE_URL}/products`, null, jsonHeaders()],
      ['GET', `${BASE_URL}/products/${PRODUCT_ID}`, null, jsonHeaders()],
      ['GET', `${BASE_URL}/categories`, null, jsonHeaders()],
    ]);

    check(responses[0], { 'GET /products 200': (r) => r.status === 200 });
    check(responses[1], { 'GET /products/:id 200': (r) => r.status === 200 });
    check(responses[2], { 'GET /categories 200': (r) => r.status === 200 });
  });

  sleep(1);
}

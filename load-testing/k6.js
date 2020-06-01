import http from 'k6/http';
import {sleep} from 'k6';

export default function () {
  http.get('http://localhost:1128/api/products/9998776/reviews');
  sleep(1);
}
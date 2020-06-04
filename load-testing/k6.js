import http from 'k6/http';
import {sleep} from 'k6';

export default function () {
  const id = Math.floor(Math.random()*10000000)
  http.get(`http://3.101.31.112:1128/api/products/${id}/reviews`);
  sleep(.2);
}
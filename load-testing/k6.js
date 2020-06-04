import http from 'k6/http';
import {sleep} from 'k6';

export default function () {
  const id = Math.floor(Math.random()*10000000)
  http.get(`http://52.53.255.152:1128/api/products/${id}/reviews`);
  sleep(.2);
}
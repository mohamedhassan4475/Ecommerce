import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  constructor(private __http: HttpClient) {}

  createOrder(product: any) {
    return this.__http.post(environment.apiUrl + 'carts', product);
  }
}

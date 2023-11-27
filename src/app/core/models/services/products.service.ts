import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Product } from '../interface/productes';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}
  getAllProducts() {
    return this._http.get<Product[]>(environment.apiUrl + 'products');
  }
  getAllCategories() {
    return this._http.get(environment.apiUrl + 'products/categories');
  }
  getProdect(id: number) {
    return this._http.get<Product[]>(environment.apiUrl + 'products/' + id);
  }
  getProductByValue(value: any) {
    return this._http.get(environment.apiUrl + 'products/category/' + value);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product.model';
import { environment } from './../../environments/environment';
import { Product } from './../models/product.model';




@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>(`${environment.baseURL}product`)
  }
  //edit
  getProduct(id: number): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(`${environment.baseURL}product/${id}`)
  }

  editProduct(id: number, product: Product): Observable<ProductResponse> {
    return this.httpClient.put<ProductResponse>(`${environment.baseURL}product/${id}`, this.makeFormData(product))
  }

  getProductImageURL(image: string): string {
    if (image) {
      return `${environment.baseURL}images/${image}`
    }
    return 'assets/images/no-images.jpg'
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${environment.baseURL}product/${id}`)
  }

  addProduct(product: Product): Observable<ProductResponse> {
    return this.httpClient.post<ProductResponse>(`${environment.baseURL}product/`, this.makeFormData(product))
  }

  makeFormData(product: Product): FormData{
    const formData = new FormData();
    formData.append('name', product.name)
    formData.append('price', `${product.price}`)
    formData.append('stock', `${product.stock}`)
    formData.append('photo', product.image)
    return formData
  }
}

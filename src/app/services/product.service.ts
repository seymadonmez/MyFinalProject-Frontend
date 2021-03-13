import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44393/api/';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<listResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getall"
    //subsribe olabilir bir responsemodel döneceksin->observable
    return this.httpClient.get<listResponseModel<Product>>(newPath); //postmandaki yaptığımızı burada yapıyoruz
  }

  getProductsByCategory(categoryId:number): Observable<listResponseModel<Product>> {
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<listResponseModel<Product>>(newPath); 
  }
}

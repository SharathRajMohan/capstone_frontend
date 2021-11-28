import { Injectable } from '@angular/core';
import { Product } from '../models/product'
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1,'Kebab','Hot Fried Chicken',200),
    new Product(2,'Shawarma','Hot Chicken Roll',60),
  ]  
  


  constructor(private http:HttpClient) { }

  // getProducts(): Product[] {
  //   return this.products;
  // }

  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/foods");
  }
}

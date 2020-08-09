import { Injectable } from "@angular/core";  
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs"; 
import { FilHotel } from '../Object/filHoltel';
@Injectable()
 
export class HotelSerivce {
  // products = data;
  api = "http://localhost:6996/api/hotel";
  constructor(private http: HttpClient) {}
  searchByPage(FilHotel): Observable<Object> {
    var url = this.api + "/searchByPage";
      return this.http.post<Object>(`${url}`, FilHotel);
  }
  // getProduct(id): Observable<Object> { 
  //   return this.http.get<Object>(`${this.api}/${id}`);
  // }
  // addProduct(product): Observable<Product> {
  //   return this.http.post<Product>(`${this.api}`, product);
  //   // let newObj = { id: 6, ...product };
  //   // this.products.push(newObj);
  // }
  // updateProduct(product): Observable<Product> {
  //   return this.http.put<Product>(`${this.api}/${product.id}`, product);
  // }

  // removeProduct(id): Observable<Product> {
  //   return this.http.delete<Product>(`${this.api}/${id}`);
  //   // return this.products.filter(product => product.id !== id);
  // }

   
}

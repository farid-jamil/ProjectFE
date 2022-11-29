import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const baseProductUrl = "http://localhost:8888/product"
const createProductUrl = "http://localhost:8888/product/add"
const delProducttUrl = "http://localhost:8888/product/del"
const putProductUrl = "http://localhost:8888/product/put"

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getProduct() {
    throw new Error('Method not implemented.');
  }


  constructor(private _http:HttpClient) { }
  //to connect the frontend to backend
//get all student
getAllProduct():Observable<any>{
  const url = "http://localhost:8888/allproducts"
  return this._http.get<any>(url)
}

 // create product
 createProduct(product: any):Observable<any>{
  console.log(product,'createapi=>');
  return this._http.post(createProductUrl, product)
}

//deleting student

deleteProduct(Id: any): Observable<any> {
  return this._http.delete(`${delProducttUrl}/${Id}`);

}

//update product
updateProduct(Id: any, product: any): Observable<any> {
  return this._http.put(`${putProductUrl}/${Id}`, product);

}

//get one product
getAProduct(id:any):Observable<any>{
  return this._http.get(`${baseProductUrl}/${id}`);
}

}
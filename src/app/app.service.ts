import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  url = "http://localhost:8888/allproducts"

  getAllData(): Observable <any>{
    return this.http.get(this.url);

  }

   deleteProduct(Id:any) {

    return this.http.delete(`product/del/${Id}`);
   }

 

}

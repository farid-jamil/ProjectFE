import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 
  readData: any = [];
 
  constructor(
    private service: ApiService
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  //Get All data

  getAllData()
  { 
    this.service.getAllProduct().subscribe((res: { data: any; })=>{
      console.log(res,"res==");
      this.readData = res. data;
    })
  }

  //get delete id
  deleteProduct(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteProduct(id).subscribe((res: any)=>{
      console.log(res,'deleteres==>');
      this.getAllData();

    });

  }

}

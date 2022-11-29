import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update 
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getAProduct(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.ProductForm.patchValue({
        Id:res.data[0].Id,
        ProductName:res.data[0].ProductName,
        TId:res.data[0].TId,
        ProductPack:res.data[0].ProductPack,
        ProductLife:res.data[0].ProductLife

      });
    });
  }
  }

  ProductForm = new FormGroup({
    'Id':new FormControl('',Validators.required),
    'ProductName':new FormControl('',Validators.required),
    'TId':new FormControl('',Validators.required),
    'ProductPack':new FormControl('',Validators.required),
    'ProductLife':new FormControl('',Validators.required)

  });

  //to create a new student
 ProductSubmit(){
    if(this.ProductForm.valid){
      console.log(this.ProductForm.value);
      this.service.createProduct( this.ProductForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.ProductForm.reset();
        this.successmsg = res.message;
      });

    }
    else{
      this.errormsg = 'all field is required';
    }

  }
//to update a customer
ProductUpdate()
{
  console.log(this.ProductForm.value,'updatedform');

  if(this.ProductForm.valid)
  {
    this.service.updateProduct(this.ProductForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'all field is required';
  }
}
}
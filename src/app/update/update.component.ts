import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})


export class UpdateComponent implements OnInit {

  ProductForm = new FormGroup({
    'Id':new FormControl('',Validators.required),
    'ProductName':new FormControl('',Validators.required),
    'TypeId':new FormControl('',Validators.required),
    'ProductPack':new FormControl('',Validators.required),
    'ProductLife':new FormControl('',Validators.required)


  });

  constructor(private service:ApiService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getAProduct(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.ProductForm.patchValue({
            Id:res.data[0].Id,
            ProductName:res.data[0].ProductName,
            TypeId:res.data[0].TypeId,
            ProductPack:res.data[0].ProductPack,
            ProductLife:res.data[0].ProductLife
        });
      });
  }
//to update a product
productUpdate()
{
  console.log(this.ProductForm.value);
    this.service.updateProduct(this.router.snapshot.params['id'], this.ProductForm.value).subscribe((result:any)=>{

    this.ProductForm.reset();
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

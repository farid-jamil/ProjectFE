import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductComponent} from './product/product.component';
import {TypeComponent} from './type/type.component';
import {UpdateComponent} from './update/update.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {path: 'home' , component:HomeComponent},
  {path: 'product' , component:ProductComponent},
  {path: 'type' , component:TypeComponent},
  {path: 'update' , component:UpdateComponent},
  {path: 'create' , component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

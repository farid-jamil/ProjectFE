import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';
import { TypeComponent } from './type/type.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    HomeComponent,
    UpdateComponent,
    CreateComponent,
    TypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }

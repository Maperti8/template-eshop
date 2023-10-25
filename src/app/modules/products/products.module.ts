import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { ProductsComponent } from './components/products/products.component';
// routing 
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

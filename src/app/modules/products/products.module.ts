import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { ProductsComponent } from './components/products/products.component';
// routing 
import { ProductsRoutingModule } from './products-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }

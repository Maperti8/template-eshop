import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // eager loaded components
  { path: '', redirectTo: 'homepage', pathMatch: 'full'},
  // lazy loaded modules
  { path: 'homepage', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch: "full", component:ProductComponent} ,//hiçbir şey verilmediğinde anasayfamda ne açılsın
  {path:"products",component:ProductComponent}, //localhost:4200/products dendiğinde ne açılsın
  {path:"products/category/:categoryId",component:ProductComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductListComponent } from './Components/Products/product-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path : 'home', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

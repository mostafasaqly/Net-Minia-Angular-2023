import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductListComponent } from './Components/Products/product-list.component';
import { ProductDetailGuard } from './Guards/product-detail.guard';
import { UserAuthGuard } from './user/Guards/user-auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path : 'home', component: HomeComponent, title: 'Home'},
  {path: 'products', component: ProductListComponent,  canActivate: [UserAuthGuard]},
  {path: 'products/:id', component: ProductDetailComponent, canActivate: [UserAuthGuard, ProductDetailGuard]},
  {path: 'user', loadChildren: () => import('src/app/user/user.module').then((m)=> m.UserModule)},
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

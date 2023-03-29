import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/Products/product-list.component';
import { ConvertToSpacesPipe } from './Shared/Pipes/convert-to-spaces.pipe';
import { FontColorDirective } from './Directives/FontColor/font-color.directive';
import { CardHoverDirective } from './Directives/CardHover/card-hover.directive';
import { StarComponent } from './Components/star/star.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './Components/home/home.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    FontColorDirective,
    CardHoverDirective,
    StarComponent,
    HomeComponent,
    NotFoundComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

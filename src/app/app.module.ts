import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/Products/product-list.component';
import { ConvertToSpacesPipe } from './Shared/Pipes/convert-to-spaces.pipe';
import { FontColorDirective } from './Directives/FontColor/font-color.directive';
import { CardHoverDirective } from './Directives/CardHover/card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    FontColorDirective,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


import { Component} from '@angular/core';
@Component({
  selector: 'app-root',
  // template: `<div>
  //   <h1>Ecommerce Project for .net track</h1>
  //   <h3>First H3 </h3>
  //   <p>paragraph for testing</p>
  //   <!-- interpolation -->
  //   <h4>for page title : {{pageTitle}} </h4>
  //   <h3>{{printMyName("Asmaa")}}</h3>
  // </div>`
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
})


export class AppComponent
{
  pageTitle: string = 'Ecommerce Project .Net Minia';
  printMyName(name: string) : string{
    return 'developer name : '+ name;
  }
}

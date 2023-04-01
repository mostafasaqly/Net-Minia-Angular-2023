import { Component } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-signup-template',
  templateUrl: './user-signup-template.component.html',
  styleUrls: ['./user-signup-template.component.css']
})
export class UserSignupTemplateComponent {
user = new User();

// save(signupFrom : NgForm)
// {
//   console.log(signupFrom.form);
//   console.log('saved'+ JSON.stringify( signupFrom.value));
// }
}

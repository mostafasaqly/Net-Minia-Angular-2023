import { Component } from '@angular/core';
import { User } from '../user';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup-reactive',
  templateUrl: './user-signup-reactive.component.html',
  styleUrls: ['./user-signup-reactive.component.css']
})
export class UserSignupReactiveComponent {
user = new User();
userForm : FormGroup;
constructor(private fb: FormBuilder)
{
  this.userForm = new FormGroup({
    firstName : new FormControl('', [Validators.required, Validators.minLength(3)]),
    lastName : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required])
  })
  // this.userForm = this.fb.group ({
  //   firstName : ['', [Validators.required, Validators.minLength(3)]],
  //   lastName : ['', [Validators.required]],
  // })
}

get firstName()
{
  return this.userForm.get('firstName');
}
}

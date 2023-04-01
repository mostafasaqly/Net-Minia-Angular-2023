import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginAuthComponent } from './Components/user-login-auth/user-login-auth.component';
import { UserAuthGuard } from './Guards/user-auth.guard';
import { UserSignupTemplateComponent } from './Components/user-signup-template/user-signup-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSignupReactiveComponent } from './Components/user-signup-reactive/user-signup-reactive.component';

const routes: Routes = [
  { path: 'userProfile', component: UserProfileComponent, title: 'User Profile' , canActivate: [UserAuthGuard]},
  { path: 'userLogin', component: UserLoginAuthComponent, title: 'User Login' },
  { path: 'signup', component: UserSignupTemplateComponent, title: 'User Sign Up' },
  { path: 'signupreactive', component: UserSignupReactiveComponent, title: 'User Sign Up reactive' }
];


@NgModule({
  declarations: [
    UserProfileComponent,
    UserLoginAuthComponent,
    UserSignupTemplateComponent,
    UserSignupReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }

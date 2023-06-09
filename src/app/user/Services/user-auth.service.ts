import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isUserLoggedSubject : BehaviorSubject<boolean> ;
  constructor() {
    this.isUserLoggedSubject = new BehaviorSubject<boolean>(this.UserState);
   }
   get UserState() :boolean
   {
    return (localStorage.getItem('token'))? true : false;
   }
   getUserStatus(): Observable<boolean> {
    return this.isUserLoggedSubject.asObservable();
   }

   login(email:string , password:string)
   {
    let userToken = '45435';
    localStorage.setItem('token', userToken);
    this.isUserLoggedSubject.next(true);
   }
   logout()
   {
    localStorage.removeItem('token');
    this.isUserLoggedSubject.next(false);
   }


}

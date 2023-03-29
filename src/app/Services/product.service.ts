import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IProduct } from '../Models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products/product.json';
  constructor(private http: HttpClient) { }

  getProducts() : Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data)),
      catchError(this.handleError)
      )
    )
  }

  private handleError(err: HttpErrorResponse)
  {
    let errorMeassage='';
    if(err.error instanceof ErrorEvent)
    // client side
    {
      errorMeassage = `an error : ${err.error.message}`;
    }
    else // back-end
    {
      errorMeassage = `server return code ${err.status} , error message: ${err.message}`
    }
    console.log(errorMeassage);
    return throwError (()=> errorMeassage);

  }
}

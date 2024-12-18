import { HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

import { Injectable } from '@angular/core';
import { throwError } from "rxjs/internal/observable/throwError";
import { SortUsersPipe } from "./sort";
import { IUser } from "../users/user";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public baseUrl = 'https://api.autenticul.ro/';
  //public baseUrl = 'https://localhost:7185/';

  constructor(private sortPipe: SortUsersPipe) { }

    handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
     // errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      errorMessage = 'Email-ul nu este in formatul corect.';
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  userSort(users: IUser[], criteria: string) {
    return this.sortPipe.transform(users, criteria);
  }

}


import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError} from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class FollowerService {
  private url = 'https://api.github.com/users/mosh-hamedani/followers';

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead
  
  //     // TODO: better job of transforming error for user consumption
  //     this.log(`${operation} failed: ${error.message}`);
  
  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  constructor( private http: HttpClient) { }

  getFollowers(): Observable<any> {
    return this.http.get<any>(this.url)
      .pipe (catchError(this.erroHandler));
  }
}

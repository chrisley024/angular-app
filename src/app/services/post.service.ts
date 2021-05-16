import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
//for catch:
import { catchError } from 'rxjs/operators';
//for throw:
import { Observable, throwError } from 'rxjs';
//import 'rxjs/add/operator/catch';
import { AppError } from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.url).pipe(catchError(this.erroHandler));
  }

  createPost(post: any): Observable<any>{
    return this.http.post<any>(this.url, (post)).pipe(catchError(this.erroHandler))
  }

  updatePost(post: any): Observable<any>{
    return this.http.put<any>(this.url + `/${post.id}`, post).pipe(catchError(this.erroHandler))
  }

  deletePost(id: any): Observable<any> {
    return this.http.delete<any>(this.url + `/${id}`).pipe(catchError(this.erroHandler));}
}

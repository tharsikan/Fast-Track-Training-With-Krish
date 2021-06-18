import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pet } from './Pet.model';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private apiServer = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}

  create(pet: Pet): Observable<Pet> {
    return this.httpClient
      .post<Pet>(
        this.apiServer + '/pets/',
        JSON.stringify(pet),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  getById(id: string): Observable<Pet> {
    return this.httpClient
      .get<Pet>(this.apiServer + '/pets/' + id)
      .pipe(catchError(this.errorHandler));
  }

  getAll(): Observable<Pet[]> {
    return this.httpClient
      .get<Pet[]>(this.apiServer + '/pets/')
      .pipe(catchError(this.errorHandler));
  }

  update(id: string, pet: Pet): Observable<Pet> {
    return this.httpClient
      .put<Pet>(
        this.apiServer + '/pets/' + id,
        JSON.stringify(pet),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }
  delete(id: string) {
    return this.httpClient
      .delete<Pet>(this.apiServer + '/pets/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}

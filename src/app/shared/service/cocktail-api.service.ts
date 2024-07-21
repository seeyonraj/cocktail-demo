import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICocktails } from '../../model/cocktails';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailApiService {

  constructor(private http: HttpClient) { }
  getCocktailList(): Observable<ICocktails[]> {
    return this.httpHandler<ICocktails[]>('/cockails');
  }

  getCocktailDetail(id: string): Observable<ICocktails> {
    return this.httpHandler<ICocktails>(`/cockails/${id}`);
  }

  private httpHandler<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(endpoint)
      .pipe(
        map((response: T) => response)
      )
  }
}

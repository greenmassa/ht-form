import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class ToursFetchService {
  constructor(private http: HttpClient) {}

  fetch(queryParams: HttpParams):Observable<Object> {
    return this.http.get(
      'https://ht.kz/test/searchPartner1',
      { params: queryParams },
    );
  }
}

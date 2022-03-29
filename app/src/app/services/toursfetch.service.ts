/* eslint-disable require-jsdoc */
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

// eslint-disable-next-line new-cap
@Injectable({providedIn: 'root'})
export class ToursfetchService {
  constructor(private http: HttpClient) {
  }
  fetch(queryParams: HttpParams):any {
    return this.http.get('https://ht.kz/test/searchPartner1',
        {params: queryParams});
  }
}

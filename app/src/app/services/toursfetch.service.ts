/* eslint-disable require-jsdoc */
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Tour} from '../shared/interfaces';

// eslint-disable-next-line new-cap
@Injectable({providedIn: 'root'})
export class ToursfetchService {
  constructor(private http: HttpClient) {
  }
  tours: {tours?: Tour[]} = {};
  fetch(queryParams: HttpParams) {
    this.http.get('https://ht.kz/test/searchPartner1',
        {params: queryParams})
        .subscribe((response) => {
          console.log('queryParams', queryParams);
          this.tours = response;
        });
  }
}

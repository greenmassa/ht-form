/* eslint-disable max-len, require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {ToursfetchService} from './services/toursfetch.service';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private toursfetchService: ToursfetchService) {
  } 
  ngOnInit(): void {
  }
}



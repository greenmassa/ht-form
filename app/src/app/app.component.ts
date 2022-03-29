/* eslint-disable max-len, require-jsdoc */
import {Component, OnInit} from '@angular/core';
import {ToursRes} from './shared/interfaces';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public results: ToursRes;
  onResults(event: ToursRes) {
    console.log('onResults event', event);
    this.results = event;
  }
  ngOnInit(): void {
  }
}



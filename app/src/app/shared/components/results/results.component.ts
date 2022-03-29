/* eslint-disable require-jsdoc */
import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../interfaces';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  // eslint-disable-next-line max-len, new-cap
  @Input('results') tours: {
    tours?: Tour[],
    query?:
      {departCity?: string | '',
       country?: string | '',
       date?: Date | undefined,
       nights?: string,
       nightsTo?: string}} = {};
  constructor() {}
  ngOnInit(): void {
  }
}


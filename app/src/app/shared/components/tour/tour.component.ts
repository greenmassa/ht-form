/* eslint-disable require-jsdoc */
import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../interfaces';

// eslint-disable-next-line new-cap
@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class TourComponent implements OnInit {
  constructor() { }
  // eslint-disable-next-line new-cap
  @Input() tour: Tour;
  ngOnInit(): void {
  }
}

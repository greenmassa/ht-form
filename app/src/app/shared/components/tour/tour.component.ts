import { Component, Input, OnInit } from '@angular/core';
import {Tour} from '../../interfaces';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export default class TourComponent implements OnInit {
  @Input() tour: Tour;

  ngOnInit(): void {
  }
}

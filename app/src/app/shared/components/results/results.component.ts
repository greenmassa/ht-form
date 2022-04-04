import { Component, Input, OnInit } from '@angular/core';
import { Query, Tours } from '../../interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export default class ResultsComponent implements OnInit {
  @Input('results') results: {next: Tours, query: Query};

  ngOnInit(): void {
  }
}

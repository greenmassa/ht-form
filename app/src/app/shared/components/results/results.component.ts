import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Query, Tours } from '../../interfaces';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResultsComponent {
  @Input('results') results: {next: Tours, query: Query};
}

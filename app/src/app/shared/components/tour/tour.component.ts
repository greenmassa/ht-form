import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {Tour} from '../../interfaces';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TourComponent {
  @Input() tour: Tour;
}

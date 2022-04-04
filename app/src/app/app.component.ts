import { Component, OnInit } from '@angular/core';
import { Query, Tours } from './shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent implements OnInit {
  public results: {next: Tours, query: Query};

  onResults(event: {next: Tours, query: Query}) {
    console.log('onResults event', event);
    this.results = event;
  }

  ngOnInit(): void {
  }
}

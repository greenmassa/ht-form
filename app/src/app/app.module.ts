import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {TourComponent} from './shared/components/tour/tour.component';
import {FormComponent} from './shared/components/form/form.component';
import {ToursfetchService} from './services/toursfetch.service';
import { ResultsComponent } from './shared/components/results/results.component';

registerLocaleData(localeRu, 'ru');

// eslint-disable-next-line new-cap
@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    FormComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru'},
    ToursfetchService,
  ],
  bootstrap: [AppComponent],
})
// eslint-disable-next-line require-jsdoc
export class AppModule {
}

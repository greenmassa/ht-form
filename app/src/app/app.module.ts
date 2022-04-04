import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import TourComponent from './shared/components/tour/tour.component';
import FormComponent from './shared/components/form/form.component';
import ToursFetchService from './services/tours-fetch.service';
import ResultsComponent from './shared/components/results/results.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations:[
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
    { provide: LOCALE_ID, useValue: 'ru' },
    ToursFetchService,
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {
}

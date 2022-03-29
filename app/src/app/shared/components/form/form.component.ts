/* eslint-disable require-jsdoc */
import {HttpParams} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToursfetchService} from 'src/app/services/toursfetch.service';
import {Country} from '../../interfaces';
// eslint-disable-next-line new-cap
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  constructor(private toursfetchService: ToursfetchService) {
  }
  countryList = [
    {id: 552, cityId: 10, name: 'Турция'},
    {id: 553, cityId: 10, name: 'Тайланд'},
    {id: 552, cityId: 11, name: 'Турция'},
    {id: 554, cityId: 11, name: 'Чехия'},
  ];
  cities = [
    {id: 10, name: 'Алматы'},
    {id: 11, name: 'Астана'},
  ];
  countries: Country[] = [];
  departCity: string = '';
  country: string = '';
  date: Date = new Date();
  form: FormGroup;
  submitEnabled: boolean = true;
  nights: number = 5;
  nightsTo: number = 15;

  ngOnInit() {
    this.form = new FormGroup({
      departCity: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      nights: new FormControl(5, [Validators.required, Validators.min(5)]),
      nightsTo: new FormControl(15, [Validators.required, Validators.max(15)]),
    });
  }
  checkCity($event: Event) {
    const inputValue = Number(($event.target as HTMLInputElement).value);
    console.log('event', $event);
    console.log('cid', this.countryList[0].cityId);
    this.countries = this.countryList.filter((c) => c.cityId === inputValue);
    const item = this.countries[0];
    this.form.controls['country'].setValue(item.id);
    console.log($event);
  }
  changeDays() {
    const nightsCheck = Number(this.form.controls['nights'].value);
    const nightsToCheck = Number(this.form.controls['nightsTo'].value);
    if (nightsCheck > nightsToCheck) {
      this.submitEnabled = false;
    } else {
      this.submitEnabled = true;
    }
  }

  submit() {
    if (this.form.valid) {
      console.log('Form submitted: ', this.form);
      // eslint-disable-next-line max-len
      this.departCity = this.cities.filter((c) => c.id == this.form.controls['departCity'].value)[0].name;
      console.log('depCity', this.departCity);

      // eslint-disable-next-line max-len
      this.country = this.countryList.filter((c)=>c.id == this.form.controls['country'].value)[0].name;
      this.date = this.form.controls['date'].value;
      this.nights = this.form.controls['nights'].value;
      this.nightsTo = this.form.controls['nightsTo'].value;

      let queryParams = new HttpParams();
      // eslint-disable-next-line max-len
      queryParams = queryParams.append('departCity', this.form.controls['departCity'].value)
          .append('country', this.form.controls['country'].value)
          .append('date', this.form.controls['date'].value)
          .append('nights', this.form.controls['nights'].value)
          .append('nightsTo', this.form.controls['nightsTo'].value);
      // eslint-disable-next-line new-cap
      this.toursfetchService.fetch(queryParams);
    }
  }
}

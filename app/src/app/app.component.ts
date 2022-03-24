import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Tour {
  hotelName: string,
  price: number,
  currency: string
}
export interface Country {
  id: number,
  name: string
}
export const countryList = [
  { id: 552, cid: 10, name: "Турция"},
  { id: 553, cid: 10, name: "Тайланд"},
  { id: 552, cid: 11, name: "Турция"},
  { id: 554, cid: 11, name: "Чехия"}
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  tours:any = {};

  constructor(private http: HttpClient) {

  }
  cities = [
    { id: 10, name: 'Алматы' },
    { id: 11, name: 'Астана' },
  ];
  countries:Country[] = [];
  
  departCity:any = null;
  country:any = null;
  date: Date = new Date();
  form: FormGroup;
  submitEnabled: boolean = true;
  nights: number = 5;
  nightsTo: number = 15;
  nightsCheck: number = 5;
  nightsToCheck: number = 15;

  ngOnInit() {
    this.form = new FormGroup({
      departCity: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      nights: new FormControl(5, [Validators.required, Validators.min(5), Validators.max(this.nightsTo)]),
      nightsTo: new FormControl(15, [Validators.required, Validators.min(this.nights), Validators.max(15)]),
    })
  }
  checkCity($event: Event){
    let value1 = Number(($event.target as HTMLInputElement).value);
    console.log('event',$event);
    console.log('cid', countryList[0].cid);
    this.countries=countryList.filter(c=>c.cid===value1);
     let itm=this.countries[0];
     this.form.controls['country'].setValue(itm.id);
    console.log($event);
  }
  changeDays() {
    this.nightsCheck = Number(this.form.controls["nights"].value);
    this.nightsToCheck = Number(this.form.controls["nightsTo"].value);
    if (this.nightsCheck > this.nightsToCheck) {
      this.submitEnabled = false
    } else {
      this.submitEnabled = true
    }
  }

  submit() {
    if (this.form.valid){
      console.log('Form submitted: ', this.form);
      this.departCity = this.cities.filter(c=>c.id == this.form.controls["departCity"].value)[0].name;
      console.log('depCity', this.departCity);
      
      this.country = countryList.filter(c=>c.id == this.form.controls["country"].value)[0].name;
      this.date = this.form.controls["date"].value;
      this.nights = this.form.controls["nights"].value;
      this.nightsTo = this.form.controls["nightsTo"].value;
  
      let queryParams = new HttpParams();
      queryParams = queryParams.append("departCity", this.form.controls["departCity"].value);
      queryParams = queryParams.append("country", this.form.controls["country"].value);
      queryParams = queryParams.append("date", this.form.controls["date"].value);
      queryParams = queryParams.append("nights", this.form.controls["nights"].value);
      queryParams = queryParams.append("nightsTo", this.form.controls["nightsTo"].value);
      this.http.get('https://ht.kz/test/searchPartner1', 
      {params: queryParams})
      .subscribe(response => {
        console.log('queryParams', queryParams);
        
        this.tours = response;
      })
    }

  }
}



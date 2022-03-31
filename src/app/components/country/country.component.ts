import {Component, Input, OnInit} from '@angular/core';
import {Country} from "../../interfaces/Country/Country";
import {Store} from "@ngrx/store";
import {AppState} from "../../interfaces/AppState";
import {getCurrentCountry} from "../../state/currentCountry/currentCountry.actions";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @Input() country!: Country;

  constructor(private store: Store<AppState>) { }
  setCurrentCountryCode(){
    this.store.dispatch(getCurrentCountry({countryCode: this.country.code}));
  }
  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/Country/Country";
import {Store} from "@ngrx/store";
import {AppState} from "../../interfaces/AppState";
import {getCountryList} from "../../state/countries/countries.actions";
import { changePagination } from 'src/app/state/pagination/pagination.actions';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  countries!: Country[]
  paginatedCountries!: Country[]
  page = 0
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getCountries()
    this.getPagination()
  }

  getCountries(){
    this.store.select('countries').subscribe((countries: Country[]) =>{
      this.countries = countries
      this.changePagination()
    })
    if (this.countries.length === 0){
      this.store.dispatch(getCountryList({ parameters: {currency: '', code: '', continent: ''} }));
    }
  }
  getPagination(){
    this.store.select('paginationPage').subscribe((page: number) =>{
      this.page = page
      this.changePagination()
    })
  }

  changePagination(){
    this.paginatedCountries = this.countries.slice(this.page * 5, (this.page + 1) * 5)
  }
  changePage(value: number){
    const newPage = this.page + value
    if (newPage >= 0 && newPage * 5 < this.countries.length){
      this.page = newPage
      this.changePagination()
      this.store.dispatch(changePagination({paginationPage: newPage}))
    }
  }
}

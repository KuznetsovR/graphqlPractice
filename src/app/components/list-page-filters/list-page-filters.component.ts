import {Component, OnDestroy, OnInit} from '@angular/core';
import {getCountryList} from "../../state/countries/countries.actions";
import {AppState} from "../../interfaces/AppState";
import {Store} from "@ngrx/store";
import {getContinentList} from "../../state/continents/continents.actions";
import {Continent} from "../../interfaces/Continent/Continent";
import {Apollo, gql} from "apollo-angular";
import {CountriesQueryResult} from "../../interfaces/Country/CountriesQueryResult";
import {SelectableListItem} from "../../interfaces/SelectableListItem";
import {CountryFilters} from "../../interfaces/CountryFilters";
import {changeFilters} from "../../state/filters/filters.actions";
import {changePagination} from "../../state/pagination/pagination.actions";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-list-page-filters',
  templateUrl: './list-page-filters.component.html',
  styleUrls: ['./list-page-filters.component.scss']
})
export class ListPageFiltersComponent implements OnInit, OnDestroy {
  multiSelectList!: SelectableListItem[];
  radioOptions!: Continent[]

  code = ''
  continentCode =''
  currency =''
  private subs = new Subscription()
  constructor(private store: Store<AppState>, private apollo: Apollo) {}

  ngOnInit(): void {
    this.getCurrencies()
    this.getContinents()
    this.getFilters()
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
  updateCode(codeEvent: Event){
    const value = (codeEvent?.target as HTMLInputElement)?.value
    if(value !== undefined && value !== null){
      this.code = value.toUpperCase()
    }
    this.updateState()
  }
  updateSelectedCurrency(item: string[]){
    this.currency = item.reduce((acc, el)=> acc + el + '|', '')
    this.currency = this.currency.substr(0, this.currency.length - 1)
    this.updateState()
  }
  updateSelectedContinent(item: Continent){
    this.continentCode = item.code
    this.updateState()
  }
  updateState(){
    this.updateFilters()
    this.updateData()
    this.updatePagination()
  }
  getCurrencies(){
    this.subs.add(
      this.apollo.watchQuery<CountriesQueryResult>({
        query: gql`
              {
                countries  {
                  currency
                }
              }
            `
      }).valueChanges.subscribe(res => {
        const currencies = res.data.countries
          .map((el) => el?.currency)
          .filter((el, index, self) => el?.length === 3 && self.indexOf(el) === index)
        this.multiSelectList = currencies.map(el => {
          return {name: el, checked: false}
        })
      })
    )
  }
  getContinents(){
    this.store.dispatch(getContinentList());
    this.subs.add(
      this.store.select('continents').subscribe((continents: Continent[]) =>{
        this.radioOptions = continents
      })
    )
  }
  getFilters(){
    this.subs.add(
      this.store.select('countryFilters').subscribe((countryFilters: CountryFilters) =>{
        this.code = countryFilters.code
        this.continentCode = countryFilters.continent
        this.currency = countryFilters.currency
      })
    )
  }
  updateFilters(){
    this.store.dispatch(changeFilters({ newFilters: {currency: this.currency, continent: this.continentCode, code: this.code} }));
  }
  updateData(){
    this.store.dispatch(getCountryList({ parameters: {currency: this.currency, code: this.code, continent: this.continentCode} }));
  }
  updatePagination(){
    this.store.dispatch(changePagination({paginationPage: 0}))
  }
}

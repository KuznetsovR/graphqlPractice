import {Country} from "./Country/Country";
import {Continent} from "./Continent/Continent";
import {ExtendedCountry} from "./Country/ExtendedCountry";
import {CountryFilters} from "./CountryFilters";

export interface AppState{
  countries: Country[]
  continents: Continent[]
  currentCountry: ExtendedCountry | null
  countryFilters: CountryFilters
  paginationPage: number
}

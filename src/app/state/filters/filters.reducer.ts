import { createReducer, on } from '@ngrx/store';
import {CountryFilters} from "../../interfaces/CountryFilters";
import {changeFilters} from "./filters.actions";

export const initialState: CountryFilters = {code: '', continent: '', currency: ''}

export const countryFiltersReducer = createReducer<CountryFilters>(
  initialState,
  on(changeFilters, (state, { newFilters }) => newFilters),
);

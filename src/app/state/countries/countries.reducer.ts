import { createReducer, on } from '@ngrx/store';
import {Country} from "../../interfaces/Country/Country";
import {getCountryListError, getCountryListSuccess} from "./countries.actions";

export const initialState: readonly Country[] = [];

export const countriesReducer = createReducer<readonly Country[]>(
  initialState,
  on(getCountryListError, (state) => state),
  on(getCountryListSuccess, (state, { countries }) => countries),
);

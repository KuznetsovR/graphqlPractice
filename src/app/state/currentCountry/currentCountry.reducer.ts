import { createReducer, on } from '@ngrx/store';
import {ExtendedCountry} from "../../interfaces/Country/ExtendedCountry";
import {
  getCurrentCountryError,
  getCurrentCountrySuccess
} from "./currentCountry.actions";

export const initialState: ExtendedCountry | null = null

export const currentCountryReducer = createReducer<ExtendedCountry | null>(
  initialState,
  on(getCurrentCountryError, (state) => state),
  on(getCurrentCountrySuccess, (state, { currentCountry }) => currentCountry),
);

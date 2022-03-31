import { createReducer, on } from '@ngrx/store';
import {getContinentListError, getContinentListSuccess} from "./continents.actions";
import {Continent} from "../../interfaces/Continent/Continent";

export const initialState: readonly Continent[] = [];

export const continentsReducer = createReducer<readonly Continent[]>(
  initialState,
  on(getContinentListError, (state) => state),
  on(getContinentListSuccess, (state, { continents }) => continents),
);

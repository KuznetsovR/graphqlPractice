import {createAction, props} from "@ngrx/store";
import {CountryFilters} from "../../interfaces/CountryFilters";

export const changeFilters = createAction('Change filters', props<{newFilters: CountryFilters}>())

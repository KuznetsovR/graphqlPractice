import {createAction, props} from "@ngrx/store";
import {CountryParameters} from "../../interfaces/Country/CountryParameters";
import {Country} from "../../interfaces/Country/Country";

export const getCountryList = createAction('[API] Retrieve countries', props<{parameters: CountryParameters}>())
export const getCountryListSuccess = createAction('[API] Retrieve countries success', props<{countries: readonly Country[]}>())
export const getCountryListError = createAction('[API] Retrieve countries failed')

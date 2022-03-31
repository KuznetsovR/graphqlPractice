import {createAction, props} from "@ngrx/store";
import {ExtendedCountry} from "../../interfaces/Country/ExtendedCountry";

export const getCurrentCountry = createAction('[API] Retrieve Country', props<{countryCode: string}>())
export const getCurrentCountrySuccess = createAction('[API] Retrieve Country success', props<{currentCountry: ExtendedCountry}>())
export const getCurrentCountryError = createAction('[API] Retrieve Country failed')

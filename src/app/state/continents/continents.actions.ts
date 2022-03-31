import {createAction, props} from "@ngrx/store";
import {Continent} from "../../interfaces/Continent/Continent";

export const getContinentList = createAction('[API] Retrieve continents')
export const getContinentListSuccess = createAction('[API] Retrieve continents success', props<{continents: readonly Continent[]}>())
export const getContinentListError = createAction('[API] Retrieve continents failed')

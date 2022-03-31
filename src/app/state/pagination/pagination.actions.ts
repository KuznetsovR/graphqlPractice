import {createAction, props} from "@ngrx/store";
export const changePagination = createAction('Change pagination', props<{paginationPage: number}>())

import {createReducer, on} from "@ngrx/store";
import {changePagination} from "./pagination.actions";

export const initialState: number = 0

export const paginationPageReducer = createReducer<number>(
  initialState,
  on(changePagination, (state, { paginationPage }) => paginationPage),
);

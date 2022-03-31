import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {getCountryList, getCountryListError, getCountryListSuccess} from "./countries.actions";
import {Apollo, gql} from "apollo-angular";
import {ApolloQueryResult} from "@apollo/client/core";
import {CountriesQueryResult} from "../../interfaces/Country/CountriesQueryResult";

@Injectable()
export class CountriesEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCountryList),
      mergeMap((action) =>
        this.apollo.watchQuery<CountriesQueryResult>({
          query: gql`
            query Countries($code: String, $continent: String, $currency: String){
              countries (
                  filter: {code: {regex:$code}, currency: {regex:$currency}, continent: {regex:$continent}}
                ) {
                code
                name
                currency
                continent{
                  name
                }
              }
            }
          `,
          variables: {
            ...action.parameters
          },
          fetchPolicy: 'network-only',
        }).valueChanges.pipe(
          map((queryResult: ApolloQueryResult<CountriesQueryResult>) => {
            const countries = queryResult.data.countries
            return getCountryListSuccess({ countries });
          }),
          catchError(() => {
            return of(getCountryListError());
          })
        )
      )
    )

  );

  constructor(
    private actions$: Actions,
    private apollo: Apollo
  ) {}
}

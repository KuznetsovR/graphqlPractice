import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {Apollo, gql} from "apollo-angular";
import {ApolloQueryResult} from "@apollo/client/core";
import {
  getCurrentCountry,
  getCurrentCountryError,
  getCurrentCountrySuccess
} from "./currentCountry.actions";
import {ExtendedCountryQueryResult} from "../../interfaces/Country/ExtendedCountryQueryResult";

@Injectable()
export class CurrentCountryEffects {
  loadCurrentCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentCountry),
      mergeMap((action) =>
        this.apollo.watchQuery<ExtendedCountryQueryResult>({
          query: gql`
            query Country($code: ID!){
             country(code:$code)  {
              code
                name
                native
                phone
                continent{
                  name
                  code
                }
                capital
                currency
                languages{
                  name
                }
                emoji
                emojiU
                states{
                  name
                }
              }
            }
          `,
          variables: {
            code: action.countryCode
          },
          fetchPolicy: 'network-only',
        }).valueChanges.pipe(
          map((queryResult: ApolloQueryResult<ExtendedCountryQueryResult>) => {
            const currentCountry = queryResult.data.country
            return getCurrentCountrySuccess({ currentCountry });
          }),
          catchError(() => {
            return of(getCurrentCountryError());
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

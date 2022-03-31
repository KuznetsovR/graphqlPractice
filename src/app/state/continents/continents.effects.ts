import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {Apollo, gql} from "apollo-angular";
import {ApolloQueryResult} from "@apollo/client/core";
import {getContinentList, getContinentListError, getContinentListSuccess} from "./continents.actions";
import {ContinentsQueryResult} from "../../interfaces/Continent/ContinentsQueryResult";

@Injectable()
export class ContinentsEffects {
  loadContinents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getContinentList),
      mergeMap(() =>
        this.apollo.watchQuery<ContinentsQueryResult>({
          query: gql`
            query Continents{
              continents  {
                name
                code
              }
            }
          `,
          fetchPolicy: 'network-only',
        }).valueChanges.pipe(
          map((queryResult: ApolloQueryResult<ContinentsQueryResult>) => {
            const continents = queryResult.data.continents
            return getContinentListSuccess({ continents });
          }),
          catchError(() => {
            return of(getContinentListError());
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

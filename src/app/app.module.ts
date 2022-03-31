import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPageModule } from "./pages/list-page/list-page.module";
import { CardPageModule } from "./pages/card-page/card-page.module";
import {APOLLO_OPTIONS, ApolloModule} from "apollo-angular";
import {HttpLink} from "apollo-angular/http";
import {InMemoryCache} from "@apollo/client/core";
import {HttpClientModule} from "@angular/common/http";
import {offsetLimitPagination} from "@apollo/client/utilities";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {countriesReducer} from "./state/countries/countries.reducer";
import {environment} from "../environments/environment";
import {CountriesEffects} from "./state/countries/countries.effects";
import {EffectsModule} from "@ngrx/effects";
import {continentsReducer} from "./state/continents/continents.reducer";
import {ContinentsEffects} from "./state/continents/continents.effects";
import {currentCountryReducer} from "./state/currentCountry/currentCountry.reducer";
import {CurrentCountryEffects} from "./state/currentCountry/currentCountry.effects";
import {countryFiltersReducer} from "./state/filters/filters.reducer";
import {paginationPageReducer} from "./state/pagination/pagination.reducer";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: offsetLimitPagination()
      },
    },
  },
});

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    ListPageModule,
    CardPageModule,
    StoreModule.forRoot({
      countries: countriesReducer,
      continents: continentsReducer,
      currentCountry: currentCountryReducer,
      countryFilters: countryFiltersReducer,
      paginationPage: paginationPageReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true
    }),
    EffectsModule.forRoot([CountriesEffects, ContinentsEffects, CurrentCountryEffects])
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: cache,
        link: httpLink.create({
          uri: 'https://countries.trevorblades.com/',
        }),
      };
    },
    deps: [HttpLink],
  },],

  bootstrap: [AppComponent]
})
export class AppModule { }

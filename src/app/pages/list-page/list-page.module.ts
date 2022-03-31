import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from "./list-page.component";
import { ListPageFiltersModule } from "../../components/list-page-filters/list-page-filters.module";
import { CountryModule } from "../../components/country/country.module";


@NgModule({
  declarations: [ListPageComponent],
  exports: [ListPageComponent],
  imports: [
    CommonModule,
    ListPageFiltersModule,
    CountryModule
  ]
})
export class ListPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPageFiltersComponent} from "./list-page-filters.component";
import {MultiSelectDropdownModule} from "../multi-select-dropdown/multi-select-dropdown.module";
import {RadioButtonGroupModule} from "../radio-button-group/radio-button-group.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ListPageFiltersComponent],
  exports: [ListPageFiltersComponent],
  imports: [
    CommonModule,
    MultiSelectDropdownModule,
    RadioButtonGroupModule,
    FormsModule
  ],
})
export class ListPageFiltersModule { }

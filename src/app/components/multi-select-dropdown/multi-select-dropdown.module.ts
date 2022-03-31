import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MultiSelectDropdownComponent} from "./multi-select-dropdown.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [MultiSelectDropdownComponent],
  exports: [
    MultiSelectDropdownComponent
  ],
  imports: [
    CommonModule, FormsModule
  ]
})
export class MultiSelectDropdownModule { }

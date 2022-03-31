import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RadioButtonGroupComponent} from "./radio-button-group.component";



@NgModule({
  declarations: [RadioButtonGroupComponent],
  exports: [RadioButtonGroupComponent],
  imports: [
    CommonModule
  ]
})
export class RadioButtonGroupModule { }

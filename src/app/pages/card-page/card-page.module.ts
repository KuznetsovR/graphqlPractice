import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardPageComponent} from "./card-page.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CardPageComponent],
  exports: [CardPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CardPageModule { }

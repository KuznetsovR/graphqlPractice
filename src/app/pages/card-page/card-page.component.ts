import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../interfaces/AppState";
import {ExtendedCountry} from "../../interfaces/Country/ExtendedCountry";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit, OnDestroy {
  country!: ExtendedCountry | null
  languages: string | undefined
  states: string | undefined
  private subs = new Subscription()
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subs.add(
      this.store.select('currentCountry').subscribe((currentCountry: ExtendedCountry | null) =>{
        this.country = currentCountry
        this.languages = currentCountry?.languages?.map(el=> el.name).join(', ')
        this.states = currentCountry?.states?.map(el=> el.name).join(', ')
      })
    )
  }
  ngOnDestroy() {
    this.subs.unsubscribe()
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListPageComponent} from "./pages/list-page/list-page.component";
import {CardPageComponent} from "./pages/card-page/card-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListPageComponent
  },
  {
    path: 'card',
    component: CardPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

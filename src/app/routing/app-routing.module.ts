import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as ROUTE from '../routing/router-path';

const routes: Routes = [
  ROUTE.DASHBOARD,
  ROUTE.HOME,
  ROUTE.LOGIN,
  ROUTE.SIGNUP
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

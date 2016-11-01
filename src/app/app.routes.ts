import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { userRoutes } from './modules/user/index';

export const appRoutes: Routes = [
	...userRoutes
] 

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class StarterAppRoutingModule { }
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { MyApp } from './app.component';

import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(appRoutes, { useHash: true }),
    UserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: []
})
export class AppModule {}

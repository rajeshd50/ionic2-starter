import { NgModule } from '@angular/core';
import { LoginComponent } from './components/index';
import { IonicApp, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  LoginComponent
  ],
  imports: [
  IonicModule,
  FormsModule
  ],
  providers: [],
  exports: [LoginComponent]
})
export class UserModule {}
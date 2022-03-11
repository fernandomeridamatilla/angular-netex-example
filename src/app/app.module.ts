import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared/shared.module';

const ANGULAR_MODULES = [
  CoreModule,
  BrowserModule,
  AppRoutingModule,
  SharedModule
];
@NgModule({
  declarations: [AppComponent],
  imports: [...ANGULAR_MODULES],
  bootstrap: [AppComponent]
})
export class AppModule {}

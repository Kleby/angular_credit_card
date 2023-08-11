import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

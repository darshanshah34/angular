import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeClickEvent } from './prime/prime.click';
import { PrimeListComponent } from './prime-list/prime-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeClickEvent,
    PrimeListComponent,
    PrimeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

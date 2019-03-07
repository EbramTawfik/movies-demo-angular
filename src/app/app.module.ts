import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesMainPageComponent } from './movies-main-page/movies-main-page.component';
import { MoviesDetailsPageComponent } from './movies-details-page/movies-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesMainPageComponent,
    MoviesDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

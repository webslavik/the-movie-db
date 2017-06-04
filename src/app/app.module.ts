import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ThemeSwitchDirective } from './directives/theme-switch.directive';

import { TMDbService }  from './shared/tmdb.service';

import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeSwitchDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MoviesModule,
    BrowserAnimationsModule
  ],
  bootstrap: [ AppComponent ],
  providers: [ TMDbService ]
})
export class AppModule { }

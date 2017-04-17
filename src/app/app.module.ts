import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

import { TMDbService }  from './tmdb.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThemeSwitchComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TMDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

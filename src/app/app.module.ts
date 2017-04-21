import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

import { TMDbService }  from './tmdb.service';
import { CutDescriptionPipe } from './cut-description.pipe';
import { MovieRatingPipe } from './movie-rating.pipe';
import { MoneyPipe } from './money.pipe';

import { ThemeSwitchDirective } from './theme-switch.directive';
import { TypeaheadDirective } from './typeahead.directive';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movie-info/:id', component: MovieInfoComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/' },
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesListComponent,
    CutDescriptionPipe,
    MovieRatingPipe,
    MovieInfoComponent,
    HomeComponent,
    AboutComponent,
    MoneyPipe,
    ThemeSwitchDirective,
    TypeaheadDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TMDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }

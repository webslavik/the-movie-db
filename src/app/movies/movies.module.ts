import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

import { MovieRatingPipe, MoneyPipe, CutDescriptionPipe } from './../_pipes/index';

import { MovieRoutingModule } from './movies-routing.module';


@NgModule({
    declarations: [
        MoviesListComponent,
        MovieInfoComponent,
        CutDescriptionPipe,
        MovieRatingPipe,
        MoneyPipe
    ],
    imports: [
        CommonModule,
        MovieRoutingModule
    ]
})
export class MoviesModule { }
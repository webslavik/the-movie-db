import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: MoviesListComponent },
            { path: 'movie-info/:id', component: MovieInfoComponent },
        ])
    ],
    exports: [ RouterModule ]
})
export class MovieRoutingModule { }
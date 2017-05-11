import { Component, OnInit } from '@angular/core';
import { TMDbService } from '../shared/tmdb.service';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {

	moviesList: object[] = [];
	errorMessage: string;

	constructor(private tmdbService: TMDbService) { }

	ngOnInit() {
		this.getMovies();
	}

	getMovies() {
		this.tmdbService.getNowPlaying()
				.subscribe(
					movies => {
						this.moviesList.push(...movies);
					},
					error => {
						this.errorMessage = error;
						console.error(error);
					});
	}


	getMoreMovies() {
		this.tmdbService.getMoreMovies()
				.subscribe(
					movies => {
						this.moviesList.push(...movies);
					},
					error => {
						console.error(error);
					});
	}

}

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
	skeletonShow: boolean = true;

	constructor(private tmdbService: TMDbService) { }

	ngOnInit() {

		this.getMovies();

	}

	getMovies() {
		this.tmdbService.getNowPlaying()
				.subscribe(
					movies => {
						this.skeletonShow = false;
						this.moviesList.push(...movies);
					},
					error => {
						this.skeletonShow = false;
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

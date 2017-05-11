import { Component,  OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { TMDbService } from '../shared/tmdb.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	@ViewChild('typeahead') input;

	switchTheme: boolean = false;
	themeData = [
		{ color: 'black', theme: 't-black', deg: 90},
		{ color: 'white', theme: 't-white', deg: 0},
		{ color: 'yellow', theme: 't-yellow', deg: 180},
		{ color: 'purple', theme: 't-purple', deg: -90}
	];

	searchMovies: object[] = [];
	query: string;

	constructor(private tmdbService: TMDbService,
							private router: Router) { }

	ngOnInit() {
	}

	onSwitchThemes() {
		this.switchTheme = !this.switchTheme;
	}

	onStop(event) {
		event.stopPropagation();
	}

	onSearchMovie(query: string) {
		if (query == '') 
			this.searchMovies = [];
		else {
			this.tmdbService.getSearchMovie(query)
					.subscribe(
						result => {
							this.searchMovies = result;
							// console.log(result);
						},
						error => {
							console.error(error);
						}
					)
		}
	}

	showMovieInfo(movie: any) {
		this.searchMovies = [];
		this.query = '';
		this.router.navigate(['movie-info', movie.id]);
		console.log(movie);
	}

}

import { Component,  OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { TMDbService } from '../shared/tmdb.service';

@Component({
	selector: 'navbar',
	host: {
		'(document:click)': 'onClick($event)',
		'(document:scroll)': 'onWindowScroll()',
	},
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
	showSearchList: boolean = false;

	navIsSticky: boolean = false;


	constructor(private tmdbService: TMDbService,
							private router: Router,
							private eref: ElementRef,
							@Inject(DOCUMENT) private document: any) { }

	ngOnInit() {}

	onSwitchThemes() {
		this.switchTheme = !this.switchTheme;
	}

	onStop(event) {
		event.stopPropagation();
	}

	onWindowScroll() {
		let wScroll = document.body.scrollTop;

		if (wScroll > 0) {
			this.navIsSticky = true;
		} else {
			this.navIsSticky = false;
		}
	}


	onClick(event) {
		if (!this.eref.nativeElement.contains(event.target)) {
			this.showSearchList = false;
			// this.query = '';
		}
	}

	onSearchMovie(query: string) {
		if (query == '') {
			this.showSearchList = false;
			this.searchMovies = [];
		}
		else {
			this.showSearchList = true;
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
		// console.log(movie);
	}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TMDbService } from '../shared/tmdb.service';


@Component({
	selector: 'app-movie-info',
	templateUrl: './movie-info.component.html',
	styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {

	id: number;
	movie = [];
	director: string;
	screenplay: string;
	studios: string; 
	error: boolean = false;
	skeletonShow: boolean = true;

	constructor(private activatedRoute: ActivatedRoute, 
							private tmdbService: TMDbService) {
	}


	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			let id = +params['id'];
			this.getMovieInfo(id);
			this.getCredits(id);
		});


	}

	getMovieInfo(id: number) {
		this.tmdbService.getMovieInfo(id)
				.subscribe(
					 movie => {
					 	this.skeletonShow = false;
					 	this.movie = movie;

					 	let studiosList = [];
					 	movie.production_companies.forEach(studio => {
					 		studiosList.push(studio.name);
					 	})

					 	this.studios = studiosList.join(', ');
					 },
					 error => {
					 	this.skeletonShow = false;
					 	this.error = true;
						console.error(error);
					 }
				)
	}

	getCredits(id: number) {
		this.tmdbService.getCredits(id)
				.subscribe(
					credits => {
						this.director = credits.director.join(', ');
						this.screenplay = credits.screenplay.join(', ');
					},
					error => {
						console.error(error);
					}
				)
	}

}

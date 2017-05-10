import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TMDbService } from '../shared/tmdb.service';


@Component({
	selector: 'app-movie-info',
	templateUrl: './movie-info.component.html',
	styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit, OnDestroy {

	id: number;
	movie = [];
	director: string;
	screenplay: string;
	error: boolean = false;
	subscription: Subscription;

	constructor(private activatedRoute: ActivatedRoute, 
							private tmdbService: TMDbService) {

		this.subscription = activatedRoute.params.subscribe(params => this.id = params['id']);
	}


	ngOnInit() {
		this.getMovieInfo();
		this.getCredits();
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	getMovieInfo() {
		this.tmdbService.getMovieInfo(this.id)
				.subscribe(
					 movie => this.movie = movie,
					 error => {
					 	this.error = true;
						console.error(error);
					 }
				)
	}

	getCredits() {
		this.tmdbService.getCredits(this.id)
				.subscribe(
					credits => {
						this.director = credits.director.join();
						this.screenplay = credits.screenplay.join();
					},
					error => {
						console.error(error);
					}
				)
	}

}

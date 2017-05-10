import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TMDbService {

	nowPlayingLink: string = 'https://api.themoviedb.org/3/movie/now_playing?api_key=48b40155da6e1c749302058b3380da7a&page=1';
	pages: number = 1;

	constructor(private http: Http) { }

	getNowPlaying() {
		return this.http.get(this.nowPlayingLink)
							 .map(response => {
								 let movies = response.json().results;
								 return movies;
							 })
							 .catch(this.handleError);
	}

	getMoreMovies() {
		this.pages++;
		return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=48b40155da6e1c749302058b3380da7a&page=${this.pages}`);
	}

	getMovieInfo(id) {
		return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=48b40155da6e1c749302058b3380da7a`)
							 .map(response => {
									let movie = response.json();
									return movie;
							 })
							 .catch(this.handleError);
	}

	getCredits(credits) {
		return this.http.get(`https://api.themoviedb.org/3/movie/${credits}/credits?api_key=48b40155da6e1c749302058b3380da7a`)
							 .map(response => {
									let credits = {
										'director': [],
										'screenplay': [],
									}

									response.json().crew.forEach(entry => {
										if (entry.job === 'Director') {
											credits.director.push(entry.name);
										} else if (entry.job === 'Screenplay' || entry.job === 'Writer') {
											credits.screenplay.push(entry.name);
										}
									});

									return credits;
							 })
							 .catch(this.handleError);
	}

	private handleError(error: any) {
		let message: string;
		message = `(╯°□°）╯︵ ┻━┻ - You can't loading data...`;
		return Observable.throw(message);
	}

}

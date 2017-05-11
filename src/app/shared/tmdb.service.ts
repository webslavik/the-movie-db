import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TMDbService {

	// 'https://api.themoviedb.org/3/movie/now_playing?api_key=48b40155da6e1c749302058b3380da7a&page=1';

	private url: string = 'https://api.themoviedb.org/3/movie/';
	private api_key: string = '?api_key=48b40155da6e1c749302058b3380da7a';
	private pages: string = '&page=';
	private now_playing: string = 'now_playing';
	private credits: string = '/credits';

	// https://api.themoviedb.org/3/search/movie?api_key=48b40155da6e1c749302058b3380da7a&query=

	private pages_count: number = 1;

	constructor(private http: Http) { }

	getNowPlaying() {
		this.pages_count = 1;

		return this.http.get(this.url + this.now_playing + this.api_key + this.pages + this.pages_count)
							 .map(response => {
								 let movies = response.json().results;
								 return movies;
							 })
							 .catch(this.handleError);
	}

	getMoreMovies() {
		this.pages_count++;
		return this.http.get(this.url + this.now_playing + this.api_key + this.pages + this.pages_count)
							 .map(response => {
							 		let moreMovies = response.json().results;
							 		return moreMovies;
							 })
							 .catch(this.handleError);
	}

	getSearchMovie(query: string) {
		return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=48b40155da6e1c749302058b3380da7a&query=${query}`)
							 .map(response => {
							 		let queryMovie = response.json().results;
							 		let moviesInfo = [];

							 		queryMovie.forEach(movie => {
							 			moviesInfo.push({ id: movie.id, title: movie.title, poster: movie.poster_path });
							 		});

							 		return moviesInfo;
							 })
							 .catch(this.handleError);
	}

	getMovieInfo(id: number) {
		return this.http.get(this.url + id + this.api_key)
							 .map(response => {
									let movie = response.json();
									return movie;
							 })
							 .catch(this.handleError);
	}

	getCredits(id: number) {
		return this.http.get(this.url + id + this.credits + this.api_key)
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

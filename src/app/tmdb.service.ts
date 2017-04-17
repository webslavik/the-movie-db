import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TMDbService {

	nowPlayingLink = 'https://api.themoviedb.org/3/movie/now_playing?api_key=48b40155da6e1c749302058b3380da7a&page=1';
	pages = 1;

  constructor(private http: Http) { }

  getNowPlaying() {
  	return this.http.get(this.nowPlayingLink);
  }

  getMoreMovies() {
  	this.pages++;
  	return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=48b40155da6e1c749302058b3380da7a&page=${this.pages}`);
  }

  getMovieInfo(id) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=48b40155da6e1c749302058b3380da7a`);
  }

}

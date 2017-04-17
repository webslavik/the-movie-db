import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TMDbService {

	upcomingList = [];
	nowPlayingLink = 'https://api.themoviedb.org/3/movie/now_playing?api_key=48b40155da6e1c749302058b3380da7a';


  constructor(private http: Http) { }

  getNowPlaying() {
  	return this.http.get(this.nowPlayingLink);
  }

}

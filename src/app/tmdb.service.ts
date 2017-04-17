import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TMDbService {

	upcomingList = [];
	upcomingLink = 'https://api.themoviedb.org/3/movie/upcoming?api_key=48b40155da6e1c749302058b3380da7a';


  constructor(private http: Http) { }

  getUpcoming() {
  	return this.http.get(this.upcomingLink);
  }

}

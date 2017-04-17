import { Component, OnInit } from '@angular/core';
import { TMDbService } from '../tmdb.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [TMDbService]
})
export class MoviesListComponent implements OnInit {

	moviesUpcomingList = [];

  constructor(private tmdbService: TMDbService) { }

  getData() {
  	this.tmdbService.getUpcoming()
  									.subscribe((data) => {
  										let moviesList = data.json().results;
  										this.moviesUpcomingList.push(...moviesList);
  									});
  }

  ngOnInit() {
  	this.getData();
  }

}

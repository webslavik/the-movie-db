import { Component, OnInit } from '@angular/core';
import { TMDbService } from '../tmdb.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  providers: [TMDbService]
})
export class MoviesListComponent implements OnInit {

	moviesList = [];
	posterPath = 'http://image.tmdb.org/t/p/w500/';

  constructor(private tmdbService: TMDbService) { }

  getData() {
  	this.tmdbService.getNowPlaying()
  									.subscribe((data) => {
  										let moviesList = data.json().results;
  										this.moviesList.push(...moviesList);
  									});
  }


  showMore() {
    this.tmdbService.getMore()
                    .subscribe((data) => {
                      let moviesList = data.json().results;
                      this.moviesList.push(...moviesList);
                      console.log(this.moviesList)
                    });
  }

  ngOnInit() {
  	this.getData();
  	console.log(this.moviesList);
  }

}

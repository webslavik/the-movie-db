import { Component, OnInit } from '@angular/core';
import { TMDbService } from '../shared/tmdb.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {

	moviesList = [];
  errorMessage: string;

  constructor(private tmdbService: TMDbService) { }

  getData() {
  	this.tmdbService.getNowPlaying()
				.subscribe(
          movies => {
					this.moviesList.push(...movies);
          },
          error => {
            this.errorMessage = error;
            console.error(error);
          });
  }


  showMore() {
    this.tmdbService.getMoreMovies()
                    .subscribe((data) => {
                      let moviesList = data.json().results;
                      this.moviesList.push(...moviesList);
                      console.log(this.moviesList)
                    });
  }

  ngOnInit() {
  	this.getData();
  }

}

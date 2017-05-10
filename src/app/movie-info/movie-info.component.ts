import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TMDbService } from '../shared/tmdb.service';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  providers: [TMDbService]
})
export class MovieInfoComponent implements OnInit, OnDestroy {

	id: number;
  movie = [];
  director: string;
  screenplay: string;
	subscription: Subscription;


  constructor(private activatedRoute: ActivatedRoute, private tmdbService: TMDbService) {

  	this.subscription = activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  getInfo() {
    this.tmdbService.getMovieInfo(this.id)
                    .subscribe(
                       data => {
                         this.movie = data.json();
                         console.log(this.movie);
                       }
                    )
  }

  getCrew() {
    this.tmdbService.getCredits(this.id)
                .subscribe(
                   data => {
                     let director = [];
                     let screenplay = [];

                     data.json().crew.forEach(entry => {
                       if (entry.job === 'Director') {
                         director.push(entry.name);
                       } else if (entry.job === 'Screenplay' || entry.job === 'Writer') {
                         screenplay.push(entry.name);
                       }
                     });



                     this.director = director.join(', ');
                     this.screenplay = screenplay.join(', ');
                   }
                )
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getInfo();
    this.getCrew();
  }

}

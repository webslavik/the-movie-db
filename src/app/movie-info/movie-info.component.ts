import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TMDbService } from '../tmdb.service';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
  providers: [TMDbService]
})
export class MovieInfoComponent implements OnInit, OnDestroy {

	id: number;
  movie = [];
	subscription: Subscription;


  constructor(private activatedRoute: ActivatedRoute, private tmdbService: TMDbService) {

  	this.subscription = activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  getInfo() {
    this.tmdbService.getMovieInfo(this.id)
                    .subscribe(
                       data => {
                         this.movie = data.json();
                         console.log(data.json());
                       }
                    )
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.getInfo();
  }

}

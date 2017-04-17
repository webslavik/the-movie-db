import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnDestroy {

	id: number;
	subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute) {

  	this.subscription = activatedRoute.params.subscribe(params => this.id = params['id']);
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

	listItems = [1,2,3,4,5,6,7,8];

  constructor() { }

  ngOnInit() {
  }

}

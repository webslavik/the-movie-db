import { Component,  OnInit, ViewChild } from '@angular/core';

import * as $ from 'jquery';
import 'typeahead.js';


@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	@ViewChild('typeahead') input;

	switchTheme: boolean = false;

	themeData = [
		{ color: 'black', theme: 't-black', deg: 90},
		{ color: 'white', theme: 't-white', deg: 0},
		{ color: 'yellow', theme: 't-yellow', deg: 180},
		{ color: 'purple', theme: 't-purple', deg: -90}
	];

	constructor() {}

	onSwitchThemes() {
		this.switchTheme = !this.switchTheme;
	}

	onStop(event) {
		event.stopPropagation();
	}

	ngOnInit() {
		$(this.input.nativeElement).typeahead({
				minLength: 2,
			  highlight: true
			},
			{
			limit: 10,
			source: function(query, suncResults, asyncResults) {
				const url = 'https://api.themoviedb.org/3/search/movie?api_key=48b40155da6e1c749302058b3380da7a&query=';

				$.get(url + query, function(data) {
					// console.log(data.results);
					asyncResults(data.results);
				});
			},
			templates: {
				empty: [
		      '<div class="empty-message">',
		        'unable to find any Best Picture winners that match the current query',
		      '</div>'
		    ].join('\n'),
				suggestion: function(data) {
					return `
						<div>
							<div class='suggest-img' style='background-image: url(http://image.tmdb.org/t/p/w92/${data.poster_path})'></div>
							<div class='suggest-title'>${data.original_title}</div>
						</div>
					`;
				}
			}
		}).bind("typeahead:select", function (event, datum) {

			console.log(datum.id);
		});

	}

}

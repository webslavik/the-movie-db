import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';
import 'typeahead.js';

@Directive({
	selector: '[typeahead]'
})
export class TypeaheadDirective implements AfterViewInit {

	@Output() showMovie = new EventEmitter<any>();

	constructor(private el: ElementRef) { }

	ngAfterViewInit() {

		$(this.el.nativeElement).typeahead({
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

			// console.log(datum.id);
			this.getId(datum.id);
		});

	}

	getId(movieId) {
		this.showMovie.emit(movieId);
	}

}

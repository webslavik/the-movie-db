import { Directive, ElementRef, AfterViewInit } from '@angular/core';

import * as $ from 'jquery';
import 'typeahead.js';

@Directive({
	selector: '[typeahead]'
})
export class TypeaheadDirective implements AfterViewInit {

	constructor(private el: ElementRef) { }


	ngAfterViewInit() {

		$(this.el.nativeElement).typeahead({
				minLength: 2,
			  highlight: true
			},
			{
			name: 'picture',
			limit: 10,
			source: function(query, suncResults, asyncResults) {
				$.get(`https://api.themoviedb.org/3/search/movie?api_key=48b40155da6e1c749302058b3380da7a&query=${query}`, function(data) {
					console.log(data.results);
					asyncResults(data.results);
				});
			},
			templates: {
				suggestion: function(data) {
					return `
						<div>
							<div class='suggest-img' style='background-image: url(http://image.tmdb.org/t/p/w92/${data.poster_path})'></div>
							<div class='suggest-title'>${data.original_title}</div>
						</div>
					`;
				}
			}
		});


	}
}

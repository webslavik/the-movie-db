import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieRating'
})
export class MovieRatingPipe implements PipeTransform {
  transform(value: any, args?: any): any {

  	value = value * 100 / 10;

    return value.toFixed(0);
  }

}

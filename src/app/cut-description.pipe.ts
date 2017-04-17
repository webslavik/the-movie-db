import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDescription'
})
export class CutDescriptionPipe implements PipeTransform {

  transform(value: any, args?: any): any {

  	if (value.length > 250) {
  		return value.substring(0, 250) + '...';
  	} else {
  		return value;
  	}

  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { ICocktails } from '../../model/cocktails';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: ICocktails[], value: string): ICocktails[] {
    if (!items) return [];
    if (!value) return items;
    return items.filter(str => {
      return str.name.toLowerCase().includes(value.toLowerCase());
    });
  }
}



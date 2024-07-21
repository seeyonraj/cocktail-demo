import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {

    if (!items) return [];
    if (!value) return items;
    return items.filter(str => {
      return str.name.toLowerCase().includes(value.toLowerCase());
    });
  }
}



import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredientsList',
  standalone: true
})
export class IngredientsListPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.join(' | ');
  }

}

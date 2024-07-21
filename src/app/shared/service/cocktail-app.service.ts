import { Injectable } from '@angular/core';
import { ICocktails } from '../../model/cocktails';

@Injectable({
  providedIn: 'root'
})
export class CocktailAppService {
  constructor() { }
  highlightFavourite(selectedItem: ICocktails): void {
    let favList: ICocktails[] = JSON.parse(localStorage.getItem('cocktailFav') || '[]');
    const index = favList.findIndex(x => x.id === selectedItem.id);
    (index === -1) ? favList.push(selectedItem) : favList.splice(index, 1);
    localStorage.setItem('cocktailFav', JSON.stringify(favList));
  }
}

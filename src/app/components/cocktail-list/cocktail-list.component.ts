import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ICocktails } from '../../model/cocktails';
import { CommonModule } from '@angular/common';
import { cocktailFilterComponent } from './cocktail-filter/cocktail-filter.component';
import { Router } from '@angular/router';
import { cocktailDetailsComponent } from '../cocktail-details/cocktail-details.component';
import { CocktailApiService, CocktailAppService } from '../../shared/service';
import { SearchPipe } from '../../shared/pipe/search.pipe';

@Component({
  selector: 'cocktail-list',
  standalone: true,
  imports: [CommonModule, cocktailFilterComponent, cocktailDetailsComponent, SearchPipe],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss'
})
export class cocktailListComponent implements OnInit {

  public cocktailList: ICocktails[] = [];
  public searchValue: string = '';

  constructor(private cocktailAppService: CocktailAppService,
    private cocktailApiService: CocktailApiService,
    private router: Router) { }

  public ngOnInit(): void {
    this.cocktailApiService.getCocktailList().subscribe((list: ICocktails[]) => {
      if (list && list.length > 0) {
        this.cocktailList = list;
      }
      if (localStorage.getItem('cocktailFav')) {
        const favList: ICocktails[] = JSON.parse(localStorage.getItem('cocktailFav') || '[]');
        this.cocktailList.forEach(_cocktailList => {
          favList.forEach((_favList) => {
            if (_cocktailList.id === _favList.id) {
              _cocktailList.isFavorite = _favList.isFavorite;
            }
          });
        });
      }
    });
  }

  public setSearchValue(value: string): void {
    this.searchValue = value;
  }

  public onClickFavourite(selectedItem: ICocktails): void {
    const data = this.cocktailList.find(list => list.id === selectedItem.id);
    if (data)
      data.isFavorite = !data?.isFavorite;
    this.cocktailAppService.highlightFavourite(selectedItem);
  }

  public cocktailDetails(id: string): void {
    this.router.navigate(['/cocktails', id]);
  }

}

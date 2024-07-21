import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICocktails } from '../../model/cocktails';
import { CocktailApiService, CocktailAppService } from '../../shared/service';

@Component({
  selector: 'cocktail-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss'
})
export class cocktailDetailsComponent implements OnInit {
  public cocktailDetail: ICocktails = {
    id: '',
    name: '',
    isAlcoholic: false,
    imageUrl: '',
    instructions: '',
    ingredients: [],
    isFavorite: false
  };

  constructor(private cocktailAppService: CocktailAppService,
    private cocktailApiService: CocktailApiService,
    private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params && params?.['id']) {
        const cocktailId: string = params?.['id'];
        this.getCocktailDetails(cocktailId);
      }
    });
  }

  private getCocktailDetails(cocktailId: string): void {
    this.cocktailApiService.getCocktailDetail(cocktailId).subscribe((detail: ICocktails) => {
      if (detail) {
        this.cocktailDetail = detail;
        let favList: ICocktails[] = JSON.parse(localStorage.getItem('cocktailFav') || '[]');
        if (favList && favList.length > 0) {
          const favListDetail: ICocktails = favList.find(_favList => _favList.id === detail.id) || this.cocktailDetail;
          this.cocktailDetail.isFavorite = favListDetail?.isFavorite;
        }
      }
    });
  }

  public onClickFavourite(selectedItem: ICocktails): void {
    selectedItem.isFavorite = !selectedItem.isFavorite;
    this.cocktailAppService.highlightFavourite(selectedItem);
  }

  public goHome(): void {
    this.router.navigate(['/cocktails']);
  }
}

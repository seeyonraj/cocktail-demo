export interface ICocktails {
  id: string;
  name: string;
  isAlcoholic: boolean;
  imageUrl: string;
  instructions: string;
  ingredients: string[];
  isFavorite: boolean;
}
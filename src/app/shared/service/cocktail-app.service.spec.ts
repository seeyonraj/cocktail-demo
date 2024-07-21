import { TestBed } from '@angular/core/testing';

import { CocktailAppService } from './cocktail-app.service';

describe('CocktailAppService', () => {
  let service: CocktailAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

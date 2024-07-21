import { Routes } from '@angular/router';
import { cocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { cocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';

export const routes: Routes = [
    { path: '', component: cocktailListComponent},
    { path: 'cocktails', component: cocktailListComponent},
    { path: 'cocktails/:id', component: cocktailDetailsComponent },
    { path: '**', component: cocktailListComponent}
];

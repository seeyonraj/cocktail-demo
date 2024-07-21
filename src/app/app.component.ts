import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { cocktailListComponent } from './components/cocktail-list/cocktail-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, cocktailListComponent ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title: string = 'Its your Favourite Cocktail shop!';
}

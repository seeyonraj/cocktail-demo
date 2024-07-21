import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'cocktail-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cocktail-filter.component.html',
  styleUrl: './cocktail-filter.component.scss'
})
export class cocktailFilterComponent {

  public searchValue: string = '';
  @Output() updateSearchValue: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput: ElementRef;

  updateSearch(): void {
    this.searchValue = this.searchInput.nativeElement.value;
    this.updateSearchValue.emit(this.searchValue);
  }
}

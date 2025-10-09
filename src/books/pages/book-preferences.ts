import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../store/bookstore';

@Component({
  selector: 'app-book-preferences',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <button class="btn" (click)="this.setOrder('asc')">Asc</button>
    <button class="btn" (click)="this.setOrder('desc')">Asc</button>
  `,
  styles: ``,
})
export class BookPreferences {
  store = inject(BooksStore);
}

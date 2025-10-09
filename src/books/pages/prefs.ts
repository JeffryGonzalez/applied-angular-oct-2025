import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../stores/books';

@Component({
  selector: 'app-book-prefs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="join">
      @for (option of store.sortFields; track option) {
        <button
          class="join-item btn"
          [disabled]="store.sortBy() === option"
          [class.btn-active]="store.sortBy() === option"
          (click)="store.setSortBy(option)"
        >
          {{ option }}
        </button>
      }
    </div>
    <div class="join mt-4">
      <button
        class="join-item btn"
        [disabled]="store.ascending() === true"
        [class.btn-active]="store.ascending() === true"
        (click)="store.toggleOrder()"
      >
        Ascending
      </button>
      <button
        class="join-item btn"
        [disabled]="store.ascending() === false"
        [class.btn-active]="store.ascending() === false"
        (click)="store.toggleOrder()"
      >
        Descending
      </button>
    </div>
  `,
  styles: ``,
})
export class Prefs {
  store = inject(BooksStore);
}

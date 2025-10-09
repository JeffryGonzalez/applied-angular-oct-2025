import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../stores/books';

@Component({
  selector: 'app-book-list-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Total Books</div>
        <div class="stat-value">{{ store.totalBooks() }}</div>
        <div class="stat-desc">That's a lot of books!</div>
      </div>
    </div>
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Oldest Publication</div>
        <div class="stat-value">{{ store.firstPublication() }}</div>
        <div class="stat-desc">Ancient!</div>
      </div>
    </div>
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Most Recent Publication</div>
        <div class="stat-value">{{ store.lastPublication() }}</div>
        <div class="stat-desc">So fresh!</div>
      </div>
    </div>
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-title">Average Length</div>
        <div class="stat-value">{{ store.averagePages() }}</div>
        <div class="stat-desc">Pretty average, tbh</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class BookListStats {
  store = inject(BooksStore);
}

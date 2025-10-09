import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BookListStats } from '../components/book-list-stats';
import { BooksStore } from '../stores/books';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BookListStats],
  template: `
    <app-book-list-stats />
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <ul class="list bg-base-100 rounded-box shadow-md w-md">
      @for (book of store.booksResource.value(); track book.id) {
        <li class="list-row">
          <div>{{ book.id }}</div>
          <div class="list-col-grow">
            <div class="text text-2xl uppercase font-semibold">
              {{ book.title }}
            </div>
            <div>{{ book.author }}</div>
          </div>
          <div>{{ book.year }}</div>
        </li>
      }
    </ul>
  `,
  styles: ``,
})
export class List {
  store = inject(BooksStore);
}

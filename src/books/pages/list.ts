import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { BooksStore } from '../store/bookstore';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <pre>{{ booksResource.value() | json }}</pre> -->
    <div>
      @for (book of books; track book.id) {
        <div>
          {{ book.title }} by {{ book.author }} published on {{ book.year }} and
          has {{ book.pages }} pages
        </div>
      }
      )
    </div>
  `,
  styles: ``,
})
export class List {
  /*  booksResource = httpResource(() => '/api/books');
  json = JSON.stringify(this.booksResource.value(), null, 2); */

  store = inject(BooksStore);
  books = this.store.books();
}

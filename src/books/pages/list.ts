import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
} from '@angular/core';
import { BooksStore } from '../stores/books';
import { Stats } from '../components/stats';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Stats],
  template: `
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <app-books-stats [books]="store.books.value() || []"></app-books-stats>
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          @for (book of sortedBooks(); track book.id) {
            <tr class="hover:bg-base-300">
              <th>{{ book.id }}</th>
              <td>{{ book.title }}</td>
              <td>{{ book.author }}</td>
              <td>{{ book.year }}</td>
            </tr>
          } @empty {
            <p>There are no books! How sad</p>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: ``,
})
export class List {
  //booksResource = httpResource(() => '/api/books');

  //sortedList = signal(this.booksResource.value() as BookApiResponse[]);
  store = inject(BooksStore);
  sortedBooks = computed(() => {
    const books = this.store.books.value() || [];
    const sortBy = this.store.sortBy();
    const ascending = this.store.ascending();
    return books.toSorted((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return ascending ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
  });
}

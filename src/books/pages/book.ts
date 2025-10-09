//import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { BooksStore } from '../stores/books';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // imports: [DatePipe],
  template: `
    <div class="">
      @for (book of sortedList(); track book.id) {
        <div class="card w-96 bg-base-100 card-sm shadow-sm">
          <div class="card-body">
            <h2 class="card-title">{{ book.title }}</h2>
            <p>
              {{ book.title }}
            </p>
            <div class="justify-end card-actions">
              <a [href]="book.link" target="_blank" class="btn btn-primary"
                >Visit</a
              >
              <p>Link {{ book.link }}</p>
              <p>Authored in {{ book.year }}</p>
            </div>
          </div>
        </div>
      } @empty {
        <p>There are no Books to display.</p>
      }
    </div>
  `,
  styles: ``,
})
export class Book {
  //   sortOptions = signal<SortingOptions>('OldestFirst');

  store = inject(BooksStore);

  sortedList = computed(() => {
    const links = this.store.BooksResource.value() || [];
    const sortingBy = this.store.sortingBy();

    return [...links].sort((lhs, rhs) => {
      const aDate = new Date(lhs.year);
      const bDate = new Date(rhs.year);
      if (sortingBy === 'NewestFirst') {
        if (aDate < bDate) {
          return 1;
        }
        if (aDate > bDate) {
          return -1;
        }
        return 0;
      } else {
        if (aDate < bDate) {
          return -1;
        }
        if (aDate > bDate) {
          return 1;
        }
        return 0;
      }
    });
  });
}

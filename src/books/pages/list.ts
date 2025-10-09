import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BookApiItem } from '../types';
import { Stats } from '../components/stats';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Stats],
  template: `
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <app-books-stats [books]="booksResource.value() || []"></app-books-stats>
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      @for (book of booksResource.value(); track book.id) {
        <div
          class="card bg-base-100 shadow-sm h-full flex flex-col border-2 border-accent"
        >
          <div class="card-body flex-1 flex flex-col">
            <h2 class="card-title text-lg line-clamp-2">{{ book.title }}</h2>
            <p class="flex-1 text-sm opacity-70 line-clamp-3">
              {{ book.author }}
            </p>
            <div class="mt-auto space-y-2">
              <div class="text-xs opacity-60">
                <p class="truncate">Released in {{ book.year }}</p>
                <p>Number of Pages {{ book.pages }}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class List {
  booksResource = httpResource<BookApiItem[]>(() => '/api/books');
}

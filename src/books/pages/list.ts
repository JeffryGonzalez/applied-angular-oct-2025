import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '../types';
import { Stats } from '../components/stats';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Stats],
  template: `
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    @if (this.booksResource.value()) {
      <app-stats [data]="this.booksResource.value()!" />
    }
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      @for (book of booksResource.value(); track book.id) {
        <div
          class="card bg-base-100 shadow-sm h-full flex flex-col border-2 border-accent"
        >
          <div class="card-body flex-1 flex flex-col">
            <h2 class="card-title text-lg line-clamp-2">
              {{ book.id }} - {{ book.title }}
            </h2>
            <div class="mt-auto space-y-2">
              <div>Author: {{ book.author }}</div>
              <div>Publication Year: {{ book.year }}</div>
              <div>Number of Pages: {{ book.pages }}</div>
            </div>
          </div>
        </div>
      } @empty {
        <div class="col-span-full text-center py-8">
          <p class="text-lg opacity-70">There are no links! Bummer!</p>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class List {
  booksResource = httpResource<Book[]>(() => '/api/books');
}

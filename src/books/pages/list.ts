import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, computed } from '@angular/core';
import { Book } from '../types';
import { Stats } from '../components/stats';
import { Era } from '../pipes/era';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Stats, Era],
  template: `
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <!-- <pre>{{ booksResource.value() | json }}</pre> -->
    @if (sortedList()) {
      <app-stats [books]="sortedList()" />
    }
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      @for (book of sortedList(); track book.id) {
        <div
          class="card bg-base-100 shadow-sm h-full flex flex-col border-2 border-accent"
        >
          <div class="card-body flex-1 flex flex-col">
            <h2 class="card-title text-lg line-clamp-2">
              [ {{ book.id }}] {{ book.title }} ({{ book.pages }} pages)
            </h2>
            <p class="flex-1 text-sm opacity-70 line-clamp-3">
              by {{ book.author }} (published/circa {{ book.year | era }})
            </p>
          </div>
        </div>
      } @empty {
        <div class="col-span-full text-center py-8">
          <p class="text-lg opacity-70">There are no books!</p>
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class List {
  // TODO: put the api call somewhere better
  booksResource = httpResource<Book[]>(() => '/api/books');
  sortedList = computed(() => this.booksResource.value() || []);
}

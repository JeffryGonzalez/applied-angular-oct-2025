import { DatePipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  computed,
  signal,
} from '@angular/core';
import Statistics from '../components/statistics';
import { BooksStore } from '../stores/books';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, Statistics],
  template: `
    <div class="container mx-auto p-4">
      <h2 class="text-3xl font-bold mb-6">Books List</h2>
      <app-books-statistics
        [books]="store.books.value() || []"
      ></app-books-statistics>

      <h2 class="text-2xl font-semibold mb-4">Books Table</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        @for (book of booksResource.value() ?? []; track book.id) {
          <div
            class="card bg-base-100 shadow-xl border border-accent flex flex-col h-full"
          >
            <div class="card-body flex-1 flex flex-col">
              <h3 class="card-title text-lg font-semibold line-clamp-2 mb-2">
                {{ book.title }}
              </h3>
              <p class="text-sm opacity-70 line-clamp-3 mb-4">{{ book.id }}</p>
              <div class="mt-auto">
                <div class="text-xs opacity-60">
                  <p class="truncate">{{ book.author }}</p>
                  <p>Added on {{ book.year | date: 'medium' }}</p>
                </div>
              </div>
            </div>
          </div>
        } @empty {
          <div class="col-span-full text-center text-gray-500 py-8">
            No books found.
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class List {
  //JEFFS CODE
  store = inject(BooksStore);
  // Pagination
  currentPage = signal(1);
  pageSize = signal(8);

  sortedBooks = computed(() => {
    const books = this.paginatedBooks() || [];
    return books;
  });

  // Calculate paginated books
  paginatedBooks = computed(() => {
    const books = this.store.books.value() || [];
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    return books.slice(startIndex, startIndex + this.pageSize());
  });

  // Total pages
  totalPages = computed(() => {
    const books = this.store.books.value() || [];
    return Math.ceil(books.length / this.pageSize());
  });

  // Page navigation methods
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage.set(page);
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((page) => page - 1);
    }
  }

  goToNextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((page) => page + 1);
    }
  }

  // Get page numbers to display (current, prev, next, first, last)
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();

    if (total <= 7) {
      // If 7 or fewer pages, show all
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    // Always include first, last, current page, and pages around current
    const pages = [1];

    if (current > 3) {
      pages.push(-1); // -1 indicates ellipsis
    }

    // Pages around current
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (current < total - 2) {
      pages.push(-1); // -1 indicates ellipsis
    }

    if (total > 1) {
      pages.push(total);
    }

    return pages;
  });
  //JEFF CODE END

  booksResource = httpResource(() => '/api/books');
  books = this.booksResource.value() ?? [];
}

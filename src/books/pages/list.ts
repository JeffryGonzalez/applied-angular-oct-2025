import { httpResource } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Stats } from '../components/stats';
import { BookApiItem } from '../types';
import { BooksStore } from '../stores/books';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Stats, TitleCasePipe],
  template: `
    <h2 class="text-2xl font-bold mb-4">
      Books List
      <span class="text-sm font-light ml-2">
        Page {{ currentPage() }} of {{ totalPages() }} Sorted by
        {{ store.sortBy() | titlecase }}
        {{ store.ascending() ? 'Ascending' : 'Descending' }}
      </span>
    </h2>
    <app-books-stats [books]="booksResource.value() || []"></app-books-stats>

    <!-- Books grid with pagination -->
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      @for (book of sortedBooks(); track book.id) {
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

      @if (paginatedBooks().length === 0) {
        <div class="col-span-full text-center py-8">
          @if (booksResource.isLoading()) {
            <span class="loading loading-spinner loading-lg"></span>
            <p class="mt-2">Loading books...</p>
          } @else {
            <p>No books found.</p>
          }
        </div>
      }
    </div>

    <!-- Pagination controls -->
    @if (totalPages() > 1) {
      <div class="flex justify-center my-8">
        <div class="join">
          <!-- Previous button -->
          <button
            class="join-item btn"
            [disabled]="currentPage() === 1"
            (click)="goToPreviousPage()"
          >
            «
          </button>

          <!-- Page numbers -->
          @for (page of pageNumbers(); track page) {
            @if (page === -1) {
              <button class="join-item btn btn-disabled">...</button>
            } @else {
              <button
                class="join-item btn"
                [class.btn-active]="page === currentPage()"
                (click)="goToPage(page)"
              >
                {{ page }}
              </button>
            }
          }

          <!-- Next button -->
          <button
            class="join-item btn"
            [disabled]="currentPage() === totalPages()"
            (click)="goToNextPage()"
          >
            »
          </button>
        </div>
      </div>
    }
  `,
  styles: ``,
})
export class List {
  booksResource = httpResource<BookApiItem[]>(() => '/api/books');
  store = inject(BooksStore);
  // Pagination
  currentPage = signal(1);
  pageSize = signal(8);

  sortedBooks = computed(() => {
    const books = this.paginatedBooks() || [];
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

  // Calculate paginated books
  paginatedBooks = computed(() => {
    const books = this.booksResource.value() || [];
    const startIndex = (this.currentPage() - 1) * this.pageSize();
    return books.slice(startIndex, startIndex + this.pageSize());
  });

  // Total pages
  totalPages = computed(() => {
    const books = this.booksResource.value() || [];
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
}

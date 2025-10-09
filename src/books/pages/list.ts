import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { BooksStore } from '../stores/books';
import { RouterLink } from '@angular/router';
import { Stats } from './stats';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Stats],
  template: `
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <app-books-stats [books]="sortedBooks() || []"></app-books-stats>
    <div
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
    >
      @for (book of sortedBooks(); track book.id) {
        <div
          class="card bg-base-100 shadow-sm h-full flex flex-col border-2 border-accent"
        >
          <div
            class="card bg-base-100 shadow-sm h-full flex flex-col border-2 border-accent"
          >
            <figure>
              <img
                src="https://cdn.pixabay.com/photo/2023/02/04/18/47/book-7767900_1280.jpg"
                alt=""
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-lg line-clamp-2">
                {{ book.title }}
              </h2>
              <p class="flex-1 text-sm opacity-70 line-clamp-3">
                {{ book.author }}
              </p>
              <div class="mt-auto space-y-2">
                <div class="text-xs opacity-60">
                  <p class="truncate">Released in {{ book.year }}</p>
                  <p>Number of Pages {{ book.pages }}</p>
                </div>
              </div>
              <div class="card-actions justify-start">
                <a
                  [routerLink]="['..', 'details', book.id]"
                  class="btn btn-primary"
                  >Details on {{ book.title }}
                </a>
              </div>
            </div>
          </div>
        </div>
      }

      @if (paginatedBooks().length === 0) {
        <div class="col-span-full text-center py-8">
          @if (this.store.books.isLoading()) {
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
}

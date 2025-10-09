import { TitleCasePipe } from '@angular/common';
import {
  Component,
  ChangeDetectionStrategy,
  inject,
  signal,
  computed,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Stats } from '../components/stats';
import { BooksStore } from '../stores/books';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Stats, TitleCasePipe, RouterLink],
  templateUrl: './list.html',
  styles: ``,
})
export class List {
  store = inject(BooksStore);
  // Pagination
  currentPage = signal(1);
  pageSize = signal(8);

  sortedBooks = computed(() => {
    const books = this.paginatedBooks() || [];
    const sortBy = this.store.sortBy();
    const ascending = this.store.ascending();
    return books.sort((a, b) => {
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

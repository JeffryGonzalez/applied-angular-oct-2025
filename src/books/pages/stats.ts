import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { BookApiItem } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats shadow">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat py-2">
          <div class="stat-title text-sm">Total Books</div>
          <div class="stat-value text-2xl">{{ totalBooks() }}</div>
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block h-8 w-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="stat py-2">
          <div class="stat-title text-sm">Earliest Book</div>
          <div class="stat-value text-2xl">{{ earliestBook() }}</div>
          <div class="stat-desc text-xs">Publication Year</div>
        </div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar avatar-online">
            <div class="w-16 rounded-full"></div>
          </div>
        </div>
        <div class="stat py-2">
          <div class="stat-title text-sm">Latest Book</div>
          <div class="stat-value text-2xl">{{ latestBook() }}</div>
          <div class="stat-desc text-xs">Publication Year</div>
        </div>
      </div>
      <div class="stat">
        <div class="stat-figure text-secondary">
          <div class="avatar avatar-online">
            <div class="w-16 rounded-full"></div>
          </div>
        </div>
        <div class="stat py-2">
          <div class="stat-title text-sm">Average Pages</div>
          <div class="stat-value text-2xl">{{ averagePages() }}</div>
          <div class="stat-desc text-xs">Pages per Book</div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Stats {
  books = input.required<BookApiItem[]>();

  totalBooks = computed(() => this.books().length);
  earliestBook = computed(() => {
    const years = this.books().map((b) => b.year);
    return Math.min(...years);
  });
  latestBook = computed(() => {
    const years = this.books().map((b) => b.year);
    return Math.max(...years);
  });
  averagePages = computed(() => {
    if (this.books().length === 0) {
      return 0;
    }
    const totalPages = this.books().reduce((sum, book) => sum + book.pages, 0);
    return Math.round(totalPages / this.books().length);
  });
}

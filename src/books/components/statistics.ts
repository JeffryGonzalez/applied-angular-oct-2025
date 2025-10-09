import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { ApiBookItem } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-books-statistics',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="card bg-base-100 shadow-xl border border-base-200">
    <div class="card-body">
      <h2 class="card-title text-primary mb-2">Books Statistics</h2>
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <div class="stat-title">Total books</div>
          <div class="stat-value text-secondary">{{ totalBooks() }}</div>
        </div>
        <div class="stat">
          <div class="stat-title">Earliest year</div>
          <div class="stat-value">{{ earliestYear() }}</div>
        </div>
        <div class="stat">
          <div class="stat-title">Most recent year</div>
          <div class="stat-value">{{ latest() }}</div>
        </div>
        <div class="stat">
          <div class="stat-title">Average pages</div>
          <div class="stat-value">{{ average() }}</div>
        </div>
      </div>
    </div>
  </div>`,
  styles: ``,
})
export default class Statistics {
  books = input.required<ApiBookItem[]>();

  totalBooks = computed(() => this.books().length);
  earliestYear = computed(() => {
    const years = this.books().map((b) => b.year);
    return Math.min(...years);
  });

  latest = computed(() => {
    const years = this.books().map((b) => b.year);
    return Math.max(...years);
  });
  average = computed(() => {
    if (this.books().length === 0) {
      return 0;
    }
    const totalPages = this.books().reduce((sum, book) => sum + book.pages, 0);
    return Math.round(totalPages / this.books().length);
  });
}

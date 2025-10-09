import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { Book } from '../types';
import { Era } from '../pipes/era';

@Component({
  selector: 'app-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Era],
  template: `
    <div class="stats shadow">
      <div class="stat place-items-center">
        <div class="stat-title">Total Books</div>
        <div class="stat-value">{{ count() }}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Earliest Published</div>
        <div class="stat-value">{{ earliest() | era }}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Most Recent</div>
        <div class="stat-value">{{ recentist() | era }}</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">Average Pages</div>
        <div class="stat-value">{{ pageAverage() }}</div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Stats {
  books = input.required<Book[]>();

  count = computed(() => this.books().length);
  byYear = computed(() => this.books().sort((book) => book.year));
  earliest = computed(() => this.byYear()[0].year);
  recentist = computed(() => [...this.byYear()].reverse()[0].year);
  pageAverage = computed(() => {
    const totalPages = this.books().reduce(
      (total, book) => total + book.pages,
      0,
    );
    return Math.floor(totalPages / this.count());
  });
}

import {
  Component,
  ChangeDetectionStrategy,
  input,
  computed,
} from '@angular/core';
import { Book } from '../types';

@Component({
  selector: 'app-stats',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>Total Number of Books: {{ data().length }}</div>
    <div>Earliest Yeah Published: {{ earliestYear() }}</div>
    <div>Most Recently Published: {{ mostRecentYear() }}</div>
    <div>Average Number of Pages: {{ data().length }}</div>
  `,
  styles: ``,
})
export class Stats {
  data = input.required<Book[]>();

  earliestYear = computed(() => {
    const years = this.data().map((book) => book.year);
    return Math.min(...years);
  });

  mostRecentYear = computed(() => {
    const years = this.data().map((book) => book.year);
    return Math.max(...years);
  });

  //   averageNumberOfPages = computed(() => {
  //     const totalPages = this.data().map((book) => book.pages);
  //     return Math.a;
  //   });
}

import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { LinksStore } from '../stores/links';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: `
    <div class="">
      @for (link of sortedList(); track link.id) {
        <div class="card w-96 bg-base-100 card-sm shadow-sm">
          <div class="card-body">
            <h2 class="card-title">{{ link.title }}</h2>
            <p>
              {{ link.description }}
            </p>
            <div class="justify-end card-actions">
              <a [href]="link.link" target="_blank" class="btn btn-primary"
                >Visit</a
              >
              <p>Link {{ link.link }}</p>
              <p>Added on {{ link.added | date: 'medium' }}</p>
            </div>
          </div>
        </div>
      } @empty {
        <p>There are no links! Bummer!</p>
      }
    </div>
  `,
  styles: ``,
})
export class List {
  //   sortOptions = signal<SortingOptions>('OldestFirst');

  store = inject(LinksStore);

  sortedList = computed(() => {
    const links = this.store.linksResource.value() || [];
    const sortingBy = this.store.sortingBy();

    return [...links].sort((lhs, rhs) => {
      const aDate = new Date(lhs.added);
      const bDate = new Date(rhs.added);
      if (sortingBy === 'NewestFirst') {
        if (aDate < bDate) {
          return 1;
        }
        if (aDate > bDate) {
          return -1;
        }
        return 0;
      } else {
        if (aDate < bDate) {
          return -1;
        }
        if (aDate > bDate) {
          return 1;
        }
        return 0;
      }
    });
  });
}

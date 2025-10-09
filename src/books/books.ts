import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BooksStore } from './stores/books';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [BooksStore],
  imports: [RouterLink, RouterOutlet],
  template: `
    @if (store.linksResource.isLoading() === false) {
      <div class="flex flex-row gap-4">
        <a class="link" routerLink="list">List</a>
        <a class="link" routerLink="prefs">Prefs</a>
      </div>
      <div class="alert alert-info">
        <p>There are {{ store.getNumberOfBooks() }}Books Available!</p>
      </div>
      <div>
        <router-outlet />
      </div>
    } @else {
      <div class="alert alert-warning">Loading your Books</div>
    }
  `,
  styles: ``,
})
export class Books {
  store = inject(BooksStore);
}

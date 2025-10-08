import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LinksStore } from './stores/links';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LinksStore],
  imports: [RouterLink, RouterOutlet],
  template: `
    @if (store.isLoaded()) {
      <div class="flex flex-row gap-4">
        <a class="link" routerLink="list">List</a>
        <a class="link" routerLink="prefs">Prefs</a>
        <a class="link" routerLink="add">Add A Link</a>
      </div>
      <div class="alert alert-info">
        <p>There are {{ store.getNumberOfLinks() }} Links Available!</p>
      </div>
      <div>
        <router-outlet />
      </div>
    } @else {
      <div class="alert alert-warning">Loading your Links</div>
    }
  `,
  styles: ``,
})
export class Links {
  store = inject(LinksStore);
}

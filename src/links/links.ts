import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `
    <div class="flex flex-row gap-4">
      <a class="link" routerLink="list">List</a>
      <a class="link" routerLink="prefs">Prefs</a>
    </div>

    <div>
      <router-outlet />
    </div>
  `,
  styles: ``,
})
export class Links {}

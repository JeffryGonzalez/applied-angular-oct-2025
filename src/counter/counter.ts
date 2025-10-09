import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterOutlet],
  template: `<div>
      <a routerLink="ui" class="link">UI</a>
    </div>
    <div>
      <router-outlet />
    </div>`,
  styles: ``,
})
export class Counter {}

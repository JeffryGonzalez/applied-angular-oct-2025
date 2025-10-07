import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-demos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink],
  providers: [],
  template: `
    <p>Demos Coming Soon</p>
    <div class="flex flex-row gap-4 p-8">
      <a class="link" routerLink="signals">Signals</a>
      <a class="link" routerLink="signals2">Golf With Signals</a>
      <a class="link" routerLink="services">Service Demo</a>
      <a class="link" routerLink="services2">Other Component Demo</a>
    </div>

    <router-outlet />
  `,
  styles: ``,
})
export class Demos {}

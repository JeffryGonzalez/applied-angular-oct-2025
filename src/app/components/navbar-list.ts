import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  template: `
    @for (link of links(); track link.path) {
      <li>
        <a [routerLink]="link.path" routerLinkActive="underline">{{
          link.label
        }}</a>
      </li>
    }
  `,
  styles: ``,
})
export class NavbarList {
  links = input.required<{ label: string; path: string }[]>();
}

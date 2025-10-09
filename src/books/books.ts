import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNav } from '../shared/components/section-nav';
import { SectionNavLink } from '../shared/components/types';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SectionNav],
  template: `
    <app-section-nav sectionName="Useful Links" [links]="links()">
    </app-section-nav>

    <router-outlet />
  `,
  styles: ``,
})
export class Books {
  links = signal<SectionNavLink[]>([
    {
      label: 'Books',
      link: 'booksList',
      requiresLogin: false,
    },
    {
      label: 'Preferences',
      link: 'preferences',
      requiresLogin: false,
    },
  ]);
}

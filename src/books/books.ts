import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNavLink } from '../shared/components/types';
import { SectionNav } from '../shared/components/section-nav';

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
      label: 'List',
      link: 'list',
      requiresLogin: false,
    },
    {
      label: 'Preferences',
      link: 'prefs',
      requiresLogin: false,
    },
  ]);
}

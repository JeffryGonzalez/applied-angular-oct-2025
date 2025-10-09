import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SectionNav } from '../shared/components/section-nav';
import { SectionNavLink } from '../shared/components/types';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, SectionNav],
  template: `
    <app-section-nav sectionName="Useful Links" [links]="links()" />
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
    {
      label: 'Add',
      link: 'add',
      requiresLogin: true,
    },
    {
      label: 'Demos',
      link: 'demo',
      requiresLogin: false,
    },
  ]);
}

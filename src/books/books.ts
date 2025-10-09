import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SectionNavLink } from '../shared/components/types';
import { SectionNav } from '../shared/components/section-nav';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNav],
  template: `
    @if (store.isLoaded()) {
      <app-section-nav sectionName="Books" [links]="links()"> </app-section-nav>
    } @else {
      <div class="alert alert-warning">Loading your Books</div>
    }
  `,
  styles: ``,
})
export class Books {
  store = { isLoaded: signal(true) };

  links = signal<SectionNavLink[]>([
    {
      label: 'List',
      link: 'list',
      requiresLogin: false,
    },
    // {
    //   label: 'Preferences',
    //   link: 'prefs',
    //   requiresLogin: false,
    // },
    // {
    //   label: 'Add',
    //   link: 'add',
    //   requiresLogin: true,
    // },
  ]);
}

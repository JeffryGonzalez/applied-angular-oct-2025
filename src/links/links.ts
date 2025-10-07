import { Component, ChangeDetectionStrategy } from '@angular/core';
import { List } from './components/list';

@Component({
  selector: 'app-links',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [List],
  template: `
    <p>Links Will Go Here</p>
    <app-links-list />
  `,
  styles: ``,
})
export class Links {}

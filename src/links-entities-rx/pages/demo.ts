import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LinksStore } from '../stores/links';

@Component({
  selector: 'app-links-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <p>Demo</p>

    <pre>Here Is Your Data: {{ store.entities() | json }}</pre>
  `,
  styles: ``,
})
export default class Demo {
  store = inject(LinksStore);
}

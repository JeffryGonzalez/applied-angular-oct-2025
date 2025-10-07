import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-links-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div>
      {{ linksResource.value() }}
    </div>
  `,
  styles: ``,
})
export class List {
  linksResource = httpResource(() => ({
    url: 'https://api.some-fake-server.com/links',
  }));
}

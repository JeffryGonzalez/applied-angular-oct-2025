import { AsyncPipe, JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { LinksApi } from '../services/links-api';
import { ApiLinkItem } from '../types';
@Component({
  selector: 'app-links-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe, AsyncPipe],
  template: `
    <p>Demo</p>

    <button (click)="loadData()">Load the Data</button>
    @if (data !== null) {
      <pre>Here Is Your Data: {{ data | async | json }}</pre>
    }
  `,
  styles: ``,
})
export default class Demo {
  api = inject(LinksApi);

  data: Observable<ApiLinkItem[]> | null = null;
  destroy = inject(DestroyRef);

  loadData() {
    this.data = this.api.getLinks().pipe(takeUntilDestroyed(this.destroy));
  }
}

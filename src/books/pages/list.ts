import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <pre>{{ booksResource.value() | json }}</pre>
  `,
  styles: ``,
})
export class List {
  booksResource = httpResource(() => '/api/books');
}

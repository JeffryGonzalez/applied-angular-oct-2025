import { JsonPipe } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../types';

@Component({
  selector: 'app-books-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
    <h2 class="text-2xl font-bold mb-4">Books List</h2>
    <ul class="list bg-base-100 rounded-box shadow-md w-md">
      @for (book of booksResource.value(); track book.id) {
        <li class="list-row">
          <div>{{ book.id }}</div>
          <div class="list-col-grow">
            <div class="text text-2xl uppercase font-semibold">
              {{ book.title }}
            </div>
            <div>{{ book.author }}</div>
          </div>
          <div>{{ book.year }}</div>
        </li>
      }
    </ul>
    <pre>{{ booksResource.value() | json }}</pre>
  `,
  styles: ``,
})
export class List {
  booksResource = httpResource<Book[]>(() => '/api/books');
}

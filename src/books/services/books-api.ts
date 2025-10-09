import { HttpClient, httpResource } from '@angular/common/http';
import { inject } from '@angular/core';
import type { Book } from '../bookItem';

export class BooksApi {
  private readonly client = inject(HttpClient);

  getBooks() {
    //return this.client.get<Book[]>('/api/books');
    return httpResource<Book[]>(() => '/api/books');
  }
}

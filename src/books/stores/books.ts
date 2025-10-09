import { httpResource } from '@angular/common/http';
import { signalStore, withComputed, withProps } from '@ngrx/signals';
import { Book } from '../types';
import { computed } from '@angular/core';

export const BooksStore = signalStore(
  withProps(() => ({
    booksResource: httpResource<Book[]>(() => '/api/books'),
  })),
  withComputed((store) => {
    return {
      totalBooks: computed(() => {
        const unwrappedBooks = store.booksResource.value();
        return unwrappedBooks ? unwrappedBooks.length : 0;
      }),
      firstPublication: computed(() => {
        const unwrappedBooks = store.booksResource.value();
        return unwrappedBooks
          ? Math.min(...unwrappedBooks.map((book) => book.year))
          : null;
      }),
      lastPublication: computed(() => {
        const unwrappedBooks = store.booksResource.value();
        return unwrappedBooks
          ? Math.max(...unwrappedBooks.map((book) => book.year))
          : null;
      }),
      averagePages: computed(() => {
        const unwrappedBooks = store.booksResource.value();
        if (!unwrappedBooks) return null;
        const totalPages = unwrappedBooks.reduce(
          (sum, book) => sum + book.pages,
          0,
        );
        return Math.trunc(totalPages / unwrappedBooks.length);
      }),
    };
  }),
);

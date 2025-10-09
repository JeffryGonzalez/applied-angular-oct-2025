import { title } from 'process';

export type Book = {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  id: string;
};

export type BooksState = {
  sortOptions: SortingOptions;
};

export type SortingOptions = {
  sortBy: SortableProperty;
  sortDirection: SortDirection;
};

export enum SortableProperty {
  title,
  author,
  year,
}

export enum SortDirection {
  ascending,
  descending,
}

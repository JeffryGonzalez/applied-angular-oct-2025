export type BookEntity = {
  id: string;
  title: string;
  author: string;
  year: number;
};

export type BookApiResponse = {
  id: string;
  title: string;
  author: string;
  year: number;
  pages: number;
};

export type SortingOptions = 'NewestFirst' | 'OldestFirst';

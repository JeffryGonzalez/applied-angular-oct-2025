export type ApiBookItem = {
  id: string;
  title: string;
  author: string;
  year: number;
  pages: number;
};

export type SortingOptions = 'NewestFirst' | 'OldestFirst';

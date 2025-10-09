export type ApiBookItem = {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  id: number;
};

export type SortingOptions = 'NewestFirst' | 'OldestFirst';

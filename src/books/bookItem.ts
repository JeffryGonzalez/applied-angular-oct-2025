export type Book = {
  id: string;
  title: string;
  author: string;
  year: number;
  pages: number;
  country: string;
  imageLink: string;
  link: string;
};

export type BookLinkCreateItem = Pick<
  Book,
  'id' | 'title' | 'author' | 'year' | 'pages'
>;

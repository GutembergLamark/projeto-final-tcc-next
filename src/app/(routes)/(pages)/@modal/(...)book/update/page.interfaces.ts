export interface BookFetch {
  book: Book;
}

export interface Book {
  id: string;
  title: string;
  category: string;
  image: string;
  author: string;
  published_date: string;
  synopsis: string;
  pages: number;
  available: boolean;
}

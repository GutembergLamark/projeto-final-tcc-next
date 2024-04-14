export interface FormSearchProps {
  cachedBooks: Array<Book>;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  published_date: string;
  synopsis: string;
  pages: number;
  available: boolean;
}

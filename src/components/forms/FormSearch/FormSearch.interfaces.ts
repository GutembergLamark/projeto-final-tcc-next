export interface FormSearchProps {
  cachedBooks: Array<CachedBook>;
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

export interface CachedBook {
  title: string;
  url: string;
}

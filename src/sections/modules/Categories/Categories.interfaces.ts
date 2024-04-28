export interface CategoriesFetch {
  books: [CategoriesBook];
}

export interface CategoriesBook {
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



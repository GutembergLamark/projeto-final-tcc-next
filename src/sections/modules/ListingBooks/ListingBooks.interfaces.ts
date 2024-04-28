export interface ListingBooksFields {
  title: string;
  cardType: "horizontal" | "vertical";
}

export interface ListingBooksFetch {
  books: [ListingBooksBook];
}

export interface ListingBooksBook {
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

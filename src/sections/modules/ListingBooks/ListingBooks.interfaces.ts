export interface ListingBooksFields {
  title: string;
  cardType: "horizontal" | "vertical";
}

export interface ListingBooksBook {
  id: string;
  title: string;
  author: string;
  published_date: string;
  synopsis: string;
  pages: number;
  available: boolean;
}

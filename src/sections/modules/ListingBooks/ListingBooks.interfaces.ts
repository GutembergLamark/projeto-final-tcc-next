export interface ListingBooksFields {
  title: string;
  cardType: "horizontal" | "vertical";
}

export interface ListingBooksBook {
  id: string;
  title: string;
  image: string;
  author: string;
  published_date: string;
  synopsis: string;
  pages: number;
  available: boolean;
}

export interface ListingBooksFields {
  title: string;
  cardType: "horizontal" | "vertical";
}

export interface ListingBooksFetch {
  books: [ListingBooksBook];
}

export interface ListingBooksOrders {
  orders: [
    { id: string; days: number; created_at: string; book: ListingBooksBook }
  ];
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

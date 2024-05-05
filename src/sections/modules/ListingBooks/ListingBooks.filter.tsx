"use client";

import { BookCard } from "@/components/general";
import {
  ListingBooksBook,
  ListingBooksOrders,
} from "./ListingBooks.interfaces";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getListOrders } from "@/utils/actions";
import { JWTPayload } from "jose";

export default function ListingBooksFilter({
  books,
  cardType,
  token,
}: {
  books: ListingBooksBook[];
  cardType: "vertical" | "horizontal";
  token: JWTPayload | null;
}) {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string>(
    searchParams.get("category") ?? ""
  );
  const [list, setList] = useState<ListingBooksBook[]>(books);

  useEffect(() => {
    async function getSavedBooks() {
      if (cardType === "vertical") {
        const { orders } = await getListOrders<ListingBooksOrders>(
          token?.sub ?? ""
        );

        setList(orders?.map((order) => order?.book));
      }
    }

    getSavedBooks();
  }, []);

  useEffect(() => {
    setCategory(searchParams.get("category") ?? "");
  }, [searchParams]);

  return (
    <div className="l-books__list">
      {list?.length ?? 0 > 0
        ? list
            .filter((book) =>
              category !== "" ? book.category === category : book
            )
            .map((book, i) => {
              return (
                <BookCard
                  key={`book-item-${book?.id}-${i}`}
                  type={cardType}
                  title={book?.title}
                  image={book?.image}
                  description={book?.synopsis}
                  status={book?.available}
                  author={book?.author}
                  edit={token?.email === "admin@email.com"}
                />
              );
            })
        : null}
    </div>
  );
}

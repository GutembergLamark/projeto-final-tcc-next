"use client";

import { BookCard } from "@/components/general";
import { ListingBooksBook } from "./ListingBooks.interfaces";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { revalidateTag } from "next/cache";

export default function ListingBooksFilter({
  books,
  cardType,
}: {
  books: ListingBooksBook[];
  cardType: "vertical" | "horizontal";
}) {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string>(
    searchParams.get("category") ?? ""
  );

  useEffect(() => {
    setCategory(searchParams.get("category") ?? "");
  }, [searchParams]);

  return (
    <div className="l-books__list">
      {books?.length ?? 0 > 0
        ? books
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
                />
              );
            })
        : null}
    </div>
  );
}

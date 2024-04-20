"use client";

import { BookCard } from "@/components/general";
import { ListingBooksBook } from "./ListingBooks.interfaces";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ListingBooksFilter({
  books,
}: {
  books: ListingBooksBook[];
}) {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string>(
    searchParams.get("category") ?? ""
  );

  return (
    <div className="l-books__list">
      {books?.length ?? 0 > 0
        ? books?.map((book, i) => {
            return (
              <BookCard
                key={`book-item-${book?.id}-${i}`}
                type={"horizontal"}
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

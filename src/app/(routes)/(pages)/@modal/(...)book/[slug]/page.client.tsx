"use client";

import { getBookByTitle } from "@/utils/actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Book, BookFetch } from "./page.interfaces";
import { MotionDiv } from "@/utils/libs/motion";
import Image from "next/image";
import { Button } from "@/components/general";
import "./page.style.scss";

export default function ContentModal({ userEmail }: { userEmail: string }) {
  const searchParams = useSearchParams();
  const [book, setBook] = useState<Book>({} as Book);

  useEffect(() => {
    async function getBook() {
      const { book } = await getBookByTitle<BookFetch>(
        searchParams?.get("title") as string
      );

      setBook(book);
    }

    getBook();
  }, []);

  return (
    <>
      <MotionDiv className="modal__head">
        <figure>
          {book?.image ? (
            <Image
              src={book?.image}
              width={113}
              height={170}
              alt={book?.title}
            />
          ) : null}
        </figure>
        <article>
          {book?.title ? <h2>{book?.title}</h2> : null}
          {book?.author ? <p>{book?.author}</p> : null}
          {
            <p style={{ color: book?.available ? "#ef9f27" : "#FF3053" }}>
              {book?.available ? "Disponível" : "Indisponível"}
            </p>
          }
          <ul>
            {book?.pages ? <li>{book?.pages} Páginas</li> : null}
            {book?.published_date ? (
              <li>Publicado em {book?.published_date}</li>
            ) : null}
          </ul>
        </article>
      </MotionDiv>
      <MotionDiv className="modal__content">
        <main>
          <h3>Sinopse:</h3>

          <p>{book?.synopsis}</p>
        </main>
        {userEmail !== "admin@email.com" && (
          <footer>
            <Button
              type="button"
              styleType="default"
              buttonProps={{ type: "button" }}
            >
              Pegar emprestado
            </Button>
          </footer>
        )}
      </MotionDiv>
    </>
  );
}

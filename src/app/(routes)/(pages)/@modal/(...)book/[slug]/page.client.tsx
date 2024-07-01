"use client";

import { createOrder, getBookByTitle } from "@/utils/actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Book, BookFetch } from "./page.interfaces";
import { MotionDiv } from "@/utils/libs/motion";
import { Button, Notify } from "@/components/general";
import { JWTPayload } from "jose";
import { useFormState } from "react-dom";
import Image from "next/image";
import "./page.style.scss";

interface JWT extends JWTPayload {
  email?: string;
}

export default function ContentModal({ userToken }: { userToken: JWT | null }) {
  const searchParams = useSearchParams();
  const [book, setBook] = useState<Book>({} as Book);
  const [bookmark, setBookMark] = useState<boolean>(
    eval(searchParams?.get("bookmark") ?? "false")
  );

  const message = {
    title: "",
    description: "",
  };

  useEffect(() => {
    async function getBook() {
      const { book } = await getBookByTitle<BookFetch>(
        searchParams?.get("title") as string
      );

      setBook(book);
    }

    setBookMark(eval(searchParams?.get("bookmark") ?? "false"));
    getBook();
  }, []);

  const [state, formAction] = useFormState(createOrder, message);

  return (
    <>
      <form action={formAction} data-cy="modal">
        <input type="hidden" value={book?.id} name="book" />
        <input type="hidden" value={userToken?.sub} name="user" />
        <input type="hidden" value={3} name="days" />
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
              <p
                style={{
                  color: !bookmark
                    ? book?.available
                      ? "#ef9f27"
                      : "#FF3053"
                    : book?.available
                    ? "#000"
                    : "#006316",
                }}
              >
                {!bookmark
                  ? book?.available
                    ? "Disponível"
                    : "Indisponível"
                  : book?.available
                  ? "Disponível"
                  : "Salvo"}
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
          {!bookmark && userToken && userToken.email !== "admin@email.com" && (
            <footer>
              <Button
                type="button"
                styleType="default"
                buttonProps={{ type: "submit" }}
              >
                Pegar emprestado
              </Button>
            </footer>
          )}
        </MotionDiv>
      </form>
      {state?.title && (
        <Notify state={state} type={state?.title?.toLowerCase() as "success"} />
      )}
    </>
  );
}

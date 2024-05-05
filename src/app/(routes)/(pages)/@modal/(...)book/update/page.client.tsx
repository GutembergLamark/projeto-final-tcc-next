"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MotionDiv } from "@/utils/libs/motion";
import { Button, Icon, Notify } from "@/components/general";
import { Input, TextArea } from "@/components/formsInputs";
import "./page.style.scss";
import { useFormState } from "react-dom";
import { getBookByTitle, updateBook } from "@/utils/actions";
import { BookFetch } from "./page.interfaces";

export default function ContentModal() {
  const [inputImage, setInputImage] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [synopsis, setSynopsis] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [pages, setPages] = useState<number>(0);
  const [id, setId] = useState("");

  const ref = useRef<HTMLImageElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function getBook() {
      const { book } = await getBookByTitle<BookFetch>(
        searchParams?.get("title") as string
      );

      setTitle(book?.title ?? "");
      setCategory(book?.category ?? "");
      setImage(book?.image ?? "");
      setSynopsis(book?.synopsis ?? "");
      setAuthor(book?.author ?? "");
      setDate(book?.published_date ?? "");
      setPages(book?.pages ?? 0);
      setId(book?.id ?? "");
    }
    getBook();
  }, []);

  useEffect(() => {
    ref.current && (ref.current.src = image);
  }, [image]);

  const message = {
    title: "",
    description: "",
  };

  const [state, formAction] = useFormState(updateBook, message);

  return (
    <>
      <form action={formAction}>
        <input type="hidden" name="id" value={id} />
        <MotionDiv className="modal__head">
          <figure>
            {image === "" ? (
              <Icon type="camera" />
            ) : (
              <img
                ref={ref}
                src={image}
                width={126}
                height={183}
                alt="Book Image"
                loading="lazy"
              />
            )}
          </figure>
          <button onClick={() => setInputImage(true)} type="button">
            <Icon type="add" />
            <span>Adicionar ou Editar Imagem de Capa</span>
          </button>
          {inputImage && (
            <Input
              type="url"
              placeholder="URL da Imagem"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          )}
        </MotionDiv>
        <MotionDiv className="modal__content">
          <main>
            <TextArea
              placeholder="Sinopse"
              name="synopsis"
              value={synopsis}
              onChange={(e) => setSynopsis(e?.target?.value)}
            />
            <Input
              type="text"
              placeholder="Titulo"
              name="title"
              value={title}
              onChange={(e) => setTitle(e?.target?.value)}
            />
            <Input
              type="text"
              placeholder="Categoria"
              name="category"
              value={category}
              onChange={(e) => setCategory(e?.target?.value)}
            />
            <Input
              type="text"
              placeholder="Autor"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e?.target?.value)}
            />
            <Input
              type="date"
              placeholder="Data de publicação"
              name="published_date"
              value={date}
              onChange={(e) => setDate(e?.target?.value)}
            />
            <Input
              type="number"
              placeholder="Páginas"
              name="pages"
              value={pages}
              onChange={(e) => setPages(parseInt(e?.target?.value ?? "0"))}
            />
          </main>
          <footer>
            <Button
              type="button"
              styleType="default"
              buttonProps={{
                type: "submit",
              }}
            >
              Atualizar Livro
            </Button>
          </footer>
        </MotionDiv>
      </form>
      {state?.title && (
        <Notify state={state} type={state?.title?.toLowerCase() as "success"} />
      )}
    </>
  );
}

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { MotionDiv } from "@/utils/libs/motion";
import { Button, Icon, Notify } from "@/components/general";
import { Input, TextArea } from "@/components/formsInputs";
import "./page.style.scss";
import { useFormState } from "react-dom";
import { createBook } from "@/utils/actions";

export default function ContentModal() {
  const [inputImage, setInputImage] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const ref = useRef<HTMLImageElement>(null);
  const router = useRouter();

  useEffect(() => {
    ref.current && (ref.current.src = image);
  }, [image]);

  const message = {
    title: "",
    description: "",
  };

  const [state, formAction] = useFormState(createBook, message);

  return (
    <>
      <form action={formAction}>
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
              onChange={(e) => setImage(e.target.value)}
            />
          )}
        </MotionDiv>
        <MotionDiv className="modal__content">
          <main>
            <TextArea placeholder="Sinopse" name="synopsis" />
            <Input type="text" placeholder="Titulo" name="title" />
            <Input type="text" placeholder="Categoria" name="category" />
            <Input type="text" placeholder="Autor" name="author" />
            <Input
              type="date"
              placeholder="Data de publicação"
              name="published_date"
            />
            <Input type="number" placeholder="Páginas" name="pages" />
          </main>
          <footer>
            <Button
              type="button"
              styleType="default"
              buttonProps={{
                type: "submit",
              }}
            >
              Cadastrar Livro
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

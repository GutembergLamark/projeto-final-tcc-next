"use client";
import style from "./DefaultModal.module.scss";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  AnimatePresence,
  MotionArticle,
  MotionButton,
  MotionDialog,
  MotionDiv,
} from "@/utils/libs/motion";
import { DefaultModalProps } from "./DefaultModal.interfaces";
import { Button } from "@/components/general";

export function DefaultModal({
  image,
  title,
  author,
  status,
  pages,
  synopses,
  published_date,
}: DefaultModalProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [open, setOpen] = useState(true);
  return (
    <AnimatePresence onExitComplete={() => router.back()} mode="sync">
      {open ? (
        <MotionDialog
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={title}
          className={style["modal"]}
          open
        >
          <MotionArticle
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            ref={ref}
            className={style["modal__wrapper"]}
          >
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
              onClick={() => setOpen(false)}
            >
              &times;
            </MotionButton>
            <MotionDiv className="modal__head wrapper">
              <figure>
                {image ? (
                  <Image src={image} width={113} height={170} alt={title} />
                ) : null}
              </figure>
              <article>
                {title ? <h2>{title}</h2> : null}
                {author ? <p>{author}</p> : null}
                {
                  <p style={{ color: status ? "#ef9f27" : "#FF3053" }}>
                    {status ? "Disponível" : "Indisponível"}
                  </p>
                }
                <ul>
                  {pages ? <li>{pages} Páginas</li> : null}
                  {published_date ? (
                    <li>Publicado em {published_date}</li>
                  ) : null}
                </ul>
              </article>
            </MotionDiv>
            <MotionDiv className="modal__content">
              <main>
                <h3>Sinopse:</h3>

                {synopses}
              </main>
              <footer>
                <Button
                  type="button"
                  styleType="default"
                  buttonProps={{ type: "button" }}
                >
                  Pegar emprestado
                </Button>
              </footer>
            </MotionDiv>
          </MotionArticle>
        </MotionDialog>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
}

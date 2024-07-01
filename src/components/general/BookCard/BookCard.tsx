"use client";

import Image from "next/image";
import { BookCardProps } from "./BookCard.interface";
import style from "./BookCard.module.scss";
import Link from "next/link";
import { MotionArticle } from "@/utils/libs/motion";
import { Icon } from "../Icon/Icon";

export function BookCard({
  type,
  image,
  title,
  description,
  status,
  author,
  edit,
}: BookCardProps) {
  return (
    <MotionArticle
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      className={`${style.card} ${style[`card--${type}`]}`}
    >
      {edit && (
        <Link
          className={style.card__edit}
          href={`/book/update?title=${title}`}
          aria-label="Editar Livro"
        >
          <Icon type="edit" />
        </Link>
      )}
      <Link
        href={`/book/${title
          .toLowerCase()
          .replace(/\s/g, "-")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")}?title=${title}${
          type === "vertical" ? "&bookmark=true" : ""
        }`}
        data-cy="card-button"
      >
        <figure>
          {image ? (
            <Image src={image} width={113} height={170} alt={title} />
          ) : null}
          <div className={style.card__loading}></div>
        </figure>
        <div className={style.card__text}>
          {title ? <h3>{title}</h3> : null}
          {type == "horizontal" && description ? <p>{description}</p> : null}
          <p>
            <span
              style={{
                color: status
                  ? "#ef9f27"
                  : type === "vertical"
                  ? "#006316"
                  : "#FF3053",
              }}
            >
              {status
                ? "Disponível"
                : type === "vertical"
                ? "Salvo"
                : "Indisponível"}
            </span>
            &bull;
            <span>{type == "vertical" ? "Ver" : author}</span>
          </p>
        </div>
      </Link>
    </MotionArticle>
  );
}

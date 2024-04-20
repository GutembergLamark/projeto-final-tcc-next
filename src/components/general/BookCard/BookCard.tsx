"use client";

import Image from "next/image";
import { BookCardProps } from "./BookCard.interface";
import style from "./BookCard.module.scss";
import Link from "next/link";

export function BookCard({
  type,
  image,
  title,
  description,
  status,
  author,
}: BookCardProps) {
  return (
    <article className={style.card}>
      <Link
        href={`/book/${title
          .toLowerCase()
          .replace(/\s/g, "-")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")}`}
      >
        <figure>
          {image ? (
            <Image src={image} width={113} height={170} alt={title} />
          ) : null}
          <div className={style.card__loading}></div>
        </figure>
        <div className={style.card__text}>
          {title ? <h3>{title}</h3> : null}
          {description ? <p>{description}</p> : null}
          <p>
            <span style={{ color: status ? "#ef9f27" : "#FF3053" }}>
              {status ? "Disponível" : "Indisponível"}
            </span>
            &bull;
            <span>{author}</span>
          </p>
        </div>
      </Link>
    </article>
  );
}

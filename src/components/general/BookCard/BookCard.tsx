import { BookCardProps } from "./BookCard.interface";
import style from "./BookCard.module.scss";

export function BookCard({
  type,
  image,
  title,
  description,
  status,
  author,
  saved,
}: BookCardProps) {
  return <article className={style.card}></article>;
}

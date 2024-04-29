import { getBooks } from "@/utils/actions";
import { Book } from "./FormSearch.interfaces";

export const getSuggestionPosts = async () => {
  const { books } = await getBooks<{ books: Book[] }>();

  return books.map((book) => ({
    title: book?.title,
    url: `/book/${book.title
      .toLowerCase()
      .replace(/\s/g, "-")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")}?title=${book.title}`,
  }));
};

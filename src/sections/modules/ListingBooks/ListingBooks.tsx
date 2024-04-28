import { getBooks } from "@/utils/actions";
import {
  ListingBooksBook,
  ListingBooksFetch,
  ListingBooksFields,
} from "./ListingBooks.interfaces";
import "./ListingBooks.scss";
import ListingBooksFilter from "./ListingBooks.filter";

const ListingBooks = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps<ListingBooksFields>): React.ReactElement => {
  const { books } = await getBooks<ListingBooksFetch>();

  return (
    <section className="l-books wrapper">
      <h2>{fields?.title}</h2>

      <ListingBooksFilter books={books} cardType={fields!.cardType} />
    </section>
  );
};

export { ListingBooks };

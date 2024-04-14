import { getBooks } from "@/utils/actions";
import {
  ListingBooksBook,
  ListingBooksFields,
} from "./ListingBooks.interfaces";
import { BookCard } from "@/components/general";
import "./ListingBooks.scss";

const ListingBooks = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps<ListingBooksFields>): React.ReactElement => {
  const data = (await getBooks()) as ListingBooksBook[];

  return (
    <section className="l-books wrapper">
      <h2>{fields?.title}</h2>

      <div className="l-books__list">
        {data?.length ?? 0 > 0
          ? data?.map((book) => {
              return <BookCard type={"horizontal"} />;
            })
          : null}
      </div>
    </section>
  );
};

export { ListingBooks };

import { getBooks, getListOrders } from "@/utils/actions";
import {
  ListingBooksOrders,
  ListingBooksBook,
  ListingBooksFetch,
  ListingBooksFields,
} from "./ListingBooks.interfaces";
import "./ListingBooks.scss";
import ListingBooksFilter from "./ListingBooks.filter";
import { Icon } from "@/components/general";
import Link from "next/link";
import { decrypt } from "@/utils/libs/jose";
import { cookies } from "next/headers";

const ListingBooks = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps<ListingBooksFields>): React.ReactElement => {
  const payload = await decrypt(cookies().get("session")?.value);
  const { books } = await getBooks<ListingBooksFetch>();
  const { orders } = await getListOrders<ListingBooksOrders>(
    payload?.sub ?? ""
  );

  return (
    <section className="l-books wrapper">
      <h2>{fields?.title}</h2>

      <ListingBooksFilter
        books={
          fields?.cardType === "vertical"
            ? orders?.map((order) => order?.book)
            : books
        }
        cardType={fields!.cardType}
      />

      {payload?.email === "admin@email.com" && (
        <Link href={"/book/create"} className="l-books__add">
          <Icon type="add" />
        </Link>
      )}
    </section>
  );
};

export { ListingBooks };

import { Icon } from "@/components/general";
import "./Categories.scss";
import CategoriesFilter from "./Categories.filter";
import { getBooks } from "@/utils/actions";
import { CategoriesFetch } from "./Categories.interfaces";

const Categories = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps): React.ReactElement => {
  const { books } = await getBooks<CategoriesFetch>();
  const categories = books?.map((book) => book.category);

  return (
    <section className="categories wrapper">
      <h2>Categorias</h2>
      <CategoriesFilter categories={categories} />
    </section>
  );
};

export { Categories };

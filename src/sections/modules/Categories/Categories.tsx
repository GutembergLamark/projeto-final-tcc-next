import { Icon } from "@/components/general";
import "./Categories.scss";
import CategoriesFilter from "./Categories.filter";

const Categories = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps): React.ReactElement => {
  return (
    <section className="categories wrapper">
      <h2>Categorias</h2>
      <CategoriesFilter />
    </section>
  );
};

export { Categories };

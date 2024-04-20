import { Categories, ListingBooks } from "@/sections/modules";
import { MotionMain } from "@/utils/libs/motion";
import "@/assets/sass/pages/dashboard.scss";

export default async function Page() {
  return (
    <MotionMain
      key="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="dashboard"
    >
      <Categories order={1} />
      <ListingBooks
        fields={{ title: "Últimos Lançamentos", cardType: "horizontal" }}
        order={2}
      />
    </MotionMain>
  );
}

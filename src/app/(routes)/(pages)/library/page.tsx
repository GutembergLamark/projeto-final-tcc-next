import { ListingBooks } from "@/sections/modules";
import { MotionMain } from "@/utils/libs/motion";

export default async function Page() {
  return (
    <MotionMain
      key="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="dashboard"
    >
      <ListingBooks
        fields={{ title: "Nossa Biblioteca", cardType: "horizontal" }}
        order={2}
      />
    </MotionMain>
  );
}

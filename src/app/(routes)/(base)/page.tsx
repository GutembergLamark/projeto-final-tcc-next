import { RootSection } from "@/sections/modules";
import { MotionMain } from "@/utils/libs/motion";
import "@/assets/sass/pages/login.scss";

export default async function Home() {
  return (
    <MotionMain
      key="login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="login"
    >
      <RootSection fields={{ type: "login" }} order={1} />
    </MotionMain>
  );
}

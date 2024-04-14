import { RootSection } from "@/sections/modules";
import { MotionMain } from "@/utils/libs/motion";

export default async function Page() {
  return (
    <MotionMain
      key="login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="login"
    >
      <RootSection fields={{ type: "register" }} order={1} />
    </MotionMain>
  );
}

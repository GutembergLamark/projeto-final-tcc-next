import { ProfileMain, ProfileTop } from "@/sections/modules";
import { MotionMain } from "@/utils/libs/motion";

export default async function Page() {
  return (
    <MotionMain
      key="dashboard"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="dashboard"
    >
      <ProfileTop fields={{}} order={1} />
      <ProfileMain fields={{}} order={2} />
    </MotionMain>
  );
}

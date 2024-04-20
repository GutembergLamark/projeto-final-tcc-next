import { DefaultModal } from "@/components/modals";
import { MotionMain } from "@/utils/libs/motion";

export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  console.log("oiiii", params?.slug);

  return (
    <>
      <DefaultModal
        image={""}
        title={"ghjhfjghjghjghjgjgh"}
        author={"hgjghjghjgjh"}
        status={true}
        pages={10}
        synopses={"jghjgjghjghj"}
        published_date={""}
      />
    </>
  );
}

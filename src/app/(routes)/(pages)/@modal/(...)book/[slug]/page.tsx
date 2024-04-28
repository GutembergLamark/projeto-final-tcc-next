import { DefaultModal } from "@/components/modals";
import ContentModal from "./page.client";

export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <DefaultModal>
      <ContentModal />
    </DefaultModal>
  );
}

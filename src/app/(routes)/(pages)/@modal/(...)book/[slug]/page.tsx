import { DefaultModal } from "@/components/modals";
import ContentModal from "./page.client";
import { decrypt } from "@/utils/libs/jose";
import { cookies } from "next/headers";
import { JWTPayload } from "jose";

export default async function BookPage({
  params,
}: {
  params: { slug: string };
}) {
  const payload: JWTPayload | null = await decrypt(
    cookies().get("session")?.value
  );

  return (
    <DefaultModal >
      <ContentModal userToken={payload} />
    </DefaultModal>
  );
}

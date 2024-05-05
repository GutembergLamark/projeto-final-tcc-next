import { DefaultModal } from "@/components/modals";
import ContentModal from "./page.client";
import { decrypt } from "@/utils/libs/jose";
import { cookies } from "next/headers";
import { JWTPayload } from "jose";
import { getProfile } from "@/utils/actions";
import { PageUserFetch } from "./page.interfaces";

export default async function BookPage({}: {}) {
  const payload: JWTPayload | null = await decrypt(
    cookies().get("session")?.value
  );
  const { user } = await getProfile<PageUserFetch>(payload?.sub!);

  return (
    <DefaultModal>
      <ContentModal user={user} />
    </DefaultModal>
  );
}

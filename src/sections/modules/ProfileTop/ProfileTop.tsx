import Image from "next/image";
import "./ProfileTop.scss";
import { getProfile } from "@/utils/actions";
import fallback from "@/assets/img/user-fallback.jpg";
import { ProfileTopFetch } from "./ProfileTop.interfaces";
import { decrypt } from "@/utils/libs/jose";
import { cookies } from "next/headers";

const ProfileTop = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps): React.ReactElement => {
  const payload = await decrypt(cookies().get("session")?.value);
  const { user } = await getProfile<ProfileTopFetch>(payload?.sub!);

  return (
    <section className="p-top">
      <div className="p-top__wrapper wrapper">
        <h2>Meu Perfil</h2>
        <figure>
          <Image
            src={fallback?.src}
            width={fallback?.width}
            height={fallback?.height}
            alt={user?.username ?? "User"}
          />
          <figcaption>{user?.username}</figcaption>
        </figure>
      </div>
    </section>
  );
};

export { ProfileTop };

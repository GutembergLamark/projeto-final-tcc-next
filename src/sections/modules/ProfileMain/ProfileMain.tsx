import { cookies } from "next/headers";
import { getProfile } from "@/utils/actions";
import { decrypt } from "@/utils/libs/jose";
import { ProfileMainFetch } from "./ProfileMain.interfaces";
import Options from "./ProfileMain.options";
import "./ProfileMain.scss";
import Image from "next/image";
import profile from "@/assets/img/profile.png";
import arrow from "@/assets/img/arrow-right.png";
import Link from "next/link";

const ProfileMain = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps): React.ReactElement => {
  const payload = await decrypt(cookies().get("session")?.value);
  const { user } = await getProfile<ProfileMainFetch>(payload?.sub!);

  return (
    <section className="p-main wrapper">
      {user?.username !== "admin" ? (
        <article>
          <h3>Gerais</h3>

          <div className="p-main__options">
            <Link href={"/user"}>
              <Image
                src={profile?.src}
                width={profile?.width}
                height={profile?.height}
                alt="Excluir Conta"
              />
              <p>
                Informações
                <span>Edite informações da sua conta</span>
              </p>
              <Image
                src={arrow?.src}
                width={arrow?.width}
                height={arrow?.height}
                alt="Seta"
              />
            </Link>
          </div>
        </article>
      ) : null}
      <article>
        <h3>Mais</h3>

        <div className="p-main__options">
          <Options user={user} />
        </div>
      </article>
    </section>
  );
};

export { ProfileMain };

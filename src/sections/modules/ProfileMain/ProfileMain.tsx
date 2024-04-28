import trash from "@/assets/img/trash.png";
import arrow from "@/assets/img/arrow-right.png";
import Image from "next/image";
import { cookies } from "next/headers";
import ExitButton from "./ProfileMain.exit";
import { getProfile } from "@/utils/actions";
import { decrypt } from "@/utils/libs/jose";
import { ProfileMainFetch } from "./ProfileMain.interfaces";
import "./ProfileMain.scss";

const ProfileMain = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps): React.ReactElement => {
  const payload = await decrypt(cookies().get("session")?.value);
  const { user } = await getProfile<ProfileMainFetch>(payload?.sub!);

  return (
    <section className="p-main wrapper">
      <article>
        <h3>Mais</h3>

        <div className="p-main__options">
          {user?.username !== "admin" ? (
            <button type="button">
              <Image
                src={trash?.src}
                width={trash?.width}
                height={trash?.height}
                alt="Excluir Conta"
              />
              <p>
                Excluir Conta
                <span>Deletar minha conta</span>
              </p>
              <Image
                src={arrow?.src}
                width={arrow?.width}
                height={arrow?.height}
                alt="Seta"
              />
            </button>
          ) : null}
          <ExitButton />
        </div>
      </article>
    </section>
  );
};

export { ProfileMain };

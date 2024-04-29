import { cookies } from "next/headers";
import { getProfile } from "@/utils/actions";
import { decrypt } from "@/utils/libs/jose";
import { ProfileMainFetch } from "./ProfileMain.interfaces";
import Options from "./ProfileMain.options";
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
          <Options user={user} />
        </div>
      </article>
    </section>
  );
};

export { ProfileMain };

import Link from "next/link";
import "./Header.scss";
import Image from "next/image";
import HeaderNav from "./Header.nav";
import { getSuggestionPosts } from "@/components/forms/FormSearch/FormSearch.suggestions";
import { decrypt } from "@/utils/libs/jose";
import { cookies } from "next/headers";

async function getData() {
  return await Promise.all([
    getSuggestionPosts(),
    decrypt(cookies().get("session")?.value),
  ]);
}

/* @ts-expect-error Async Server Component */
const Header = async (): React.ReactElement => {
  const [suggestion, payload] = await getData();

  return (
    <>
      <header className="header">
        <div className="header__wrapper wrapper">
          <h1>
            <Link href={"/dashboard"}>
              <Image
                src={"/header-logo.png"}
                width={53}
                height={45}
                alt="Logo"
              />
            </Link>
          </h1>
          <HeaderNav
            responsivity="desktop"
            suggestion={suggestion}
            payload={payload}
          />
        </div>
      </header>
      <HeaderNav
        responsivity="mobile"
        suggestion={suggestion}
        payload={payload}
      />
    </>
  );
};

export { Header };

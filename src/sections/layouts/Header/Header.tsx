import Link from "next/link";
import "./Header.scss";
import Image from "next/image";
import HeaderNav from "./Header.nav";

/* @ts-expect-error Async Server Component */
const Header = async (): React.ReactElement => {
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
          <HeaderNav responsivity="desktop" />
        </div>
      </header>
      <HeaderNav responsivity="mobile" />
    </>
  );
};

export { Header };

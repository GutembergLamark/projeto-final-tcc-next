import { FormLogin, FormRegister } from "@/components/forms";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import library from "@/assets/img/library.png";
import "./RootSection.scss";
import { RootSectionFields } from "./RootSection.interfaces";

const RootSection = async ({
  fields,
  order,
}: /* @ts-expect-error Async Server Component */
ModuleProps<RootSectionFields>): React.ReactElement => {
  return (
    <section className="r-login">
      <article>
        <picture>
          <Image
            src="/logo.png"
            width={187}
            height={160}
            alt="Logo"
            priority={order == 1}
          />
        </picture>
        <h2>Bem-vindo</h2>
        {fields?.type === "login" ? (
          <p>Olá, entre para continuar</p>
        ) : (
          <p>Olá, crie uma nova conta</p>
        )}
        {fields?.type === "login" ? (
          <p>
            Ou <Link href={"/register"}>Crie uma nova conta</Link>
          </p>
        ) : (
          <p>
            Ou <Link href={"/"}>entre para continuar</Link>
          </p>
        )}

        {fields?.type === "login" ? <FormLogin /> : <FormRegister />}
      </article>
      <figure>
        <Image
          src={library?.src}
          width={library?.width}
          height={library?.height}
          alt="Library"
        />
      </figure>
    </section>
  );
};

export { RootSection };

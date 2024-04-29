"use client";

import Image from "next/image";
import exit from "@/assets/img/exit.png";
import trash from "@/assets/img/trash.png";
import arrow from "@/assets/img/arrow-right.png";
import { deleteSession, deleteUser } from "@/utils/actions";
import { ProfileMainFetch } from "./ProfileMain.interfaces";

export default function Options({ user }: ProfileMainFetch) {
  return (
    <>
      {user?.username !== "admin" ? (
        <button
          type="button"
          onClick={() => {
            (async () => {
              await deleteUser(user.id);
            })();
          }}
        >
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
      <button type="button" onClick={() => deleteSession()}>
        <Image
          src={exit?.src}
          width={exit?.width}
          height={exit?.height}
          alt="Sair"
        />

        <p>
          Sair <span>Deslogar minha conta</span>
        </p>
        <Image
          src={arrow?.src}
          width={arrow?.width}
          height={arrow?.height}
          alt="Seta"
        />
      </button>
    </>
  );
}

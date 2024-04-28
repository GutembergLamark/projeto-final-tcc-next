"use client";

import Image from "next/image";
import exit from "@/assets/img/exit.png";
import arrow from "@/assets/img/arrow-right.png";
import { deleteSession } from "@/utils/actions";

export default function ExitButton() {
  return (
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
  );
}

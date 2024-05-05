"use client";

import { MotionDiv } from "@/utils/libs/motion";
import { Button, Notify } from "@/components/general";
import { Input } from "@/components/formsInputs";
import { updateUser } from "@/utils/actions";
import { PageUserFetch } from "./page.interfaces";
import "./page.style.scss";
import { useState } from "react";

export default function ContentModal({ user }: PageUserFetch) {
  const [username, setUsername] = useState<string>(user?.username ?? "");
  const [email, setEmail] = useState<string>(user?.email ?? "");
  const [cpf, setCpf] = useState<string>(user?.cpf ?? "");

  return (
    <>
      <form action={updateUser}>
        <MotionDiv className="modal__head">
          <h2>Meus Dados</h2>
        </MotionDiv>
        <MotionDiv className="modal__content">
          <main>
            <Input
              type="text"
              placeholder="Nome de Usuário"
              name="username"
              value={username}
              onChange={(e) => setUsername(e?.target?.value)}
            />
            <Input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e?.target?.value)}
            />
            <Input
              type="text"
              placeholder="CPF"
              name="cpf"
              value={cpf}
              onChange={(e) => setCpf(e?.target?.value)}
            />
          </main>
          <footer>
            <Button
              type="button"
              styleType="default"
              buttonProps={{
                type: "submit",
              }}
            >
              Atualizar
            </Button>
          </footer>
        </MotionDiv>
      </form>
    </>
  );
}

"use client";

import { Input } from "@/components/formsInputs";
import { Button, Notify } from "@/components/general";
import { register } from "@/utils/actions";
import style from "./FormRegister.module.scss";
import { useFormState } from "react-dom";

export function FormRegister({}) {
  const message = {
    title: "",
    description: "",
    user: {},
  };

  const [state, formAction] = useFormState(register, message);

  return (
    <>
      <form className={style.form} action={formAction}>
        <Input type="text" placeholder="Seu nome" name="username" />
        <Input type="email" placeholder="Seu email" name="email" />
        <Input type="text" placeholder="CPF" name="cpf" />
        <Input type="password" placeholder="Senha" name="password" />
        <Button
          type="button"
          label="Criar"
          buttonProps={{ type: "submit" }}
          styleType="default"
        >
          Criar
        </Button>
      </form>

      {state?.title && (
        <Notify state={state} type={state?.title?.toLowerCase() as "success"} />
      )}
    </>
  );
}

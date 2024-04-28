"use client";

import { Input } from "@/components/formsInputs";
import style from "./FormLogin.module.scss";
import { Button, Notify } from "@/components/general";
import { login } from "@/utils/actions";
import { useFormState } from "react-dom";

export function FormLogin({}) {
  const message = {
    title: "",
    description: "",
    token: "",
  };

  const [state, formAction] = useFormState(login, message);

  return (
    <>
      <form className={style.form} action={formAction}>
        <Input type="email" placeholder="Email" name="email" />
        <Input type="password" placeholder="Senha" name="password" />
        <Button
          type="button"
          label="Entrar"
          buttonProps={{ type: "submit" }}
          styleType="default"
        >
          Entrar
        </Button>
      </form>

      {state?.title && (
        <Notify state={state} type={state?.title?.toLowerCase() as "success"} />
      )}
    </>
  );
}

import { Input } from "@/components/formsInputs";
import style from "./FormLogin.module.scss";
import { Button } from "@/components/general";
import { login } from "@/utils/actions";

export function FormLogin({}) {
  return (
    <form className={style.form} action={login}>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
      <Button
        type="button"
        label="Entrar"
        buttonProps={{ type: "submit" }}
        styleType="default"
      >
        Entrar
      </Button>
    </form>
  );
}

import { Input } from "@/components/formsInputs";
import { Button } from "@/components/general";
import { register } from "@/utils/actions";
import style from "./FormRegister.module.scss";

export function FormRegister({}) {
  return (
    <form className={style.form} action={register}>
      <Input type="text" placeholder="Seu nome" />
      <Input type="email" placeholder="Seu email" />
      <Input type="text" placeholder="CPF" />
      <Input type="password" placeholder="Senha" />
      <Button
        type="button"
        label="Criar"
        buttonProps={{ type: "submit" }}
        styleType="default"
      >
        Criar
      </Button>
    </form>
  );
}

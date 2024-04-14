import { HTMLInputTypeAttribute } from "react";
import style from "./Input.module.scss";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <fieldset className={style.input}>
      <input {...props} />
    </fieldset>
  );
}

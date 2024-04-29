import { TextareaHTMLAttributes } from "react";
import style from "./TextArea.module.scss";

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <fieldset className={style.textarea}>
      <textarea {...props} />
    </fieldset>
  );
}

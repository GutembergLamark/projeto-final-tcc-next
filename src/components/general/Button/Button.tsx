"use client";

import { MotionButton } from "@/utils/libs/motion";
import { ButtonProps } from "./Button.interface";
import style from "./Button.module.scss";
import Link from "next/link";

export function Button({
  type,
  label,
  href,
  target,
  linkProps,
  buttonProps,
  styleType,
  children,
}: ButtonProps) {
  const Tag = type == "link" ? Link : MotionButton;

  return (
    <Tag
      className={`${style.button} ${style[`button--${styleType}`]}`}
      aria-label={label}
      href={(type == "link" ? href : undefined) as string}
      target={(type == "link" ? target : undefined) as string}
      {...((type == "link" ? linkProps : {}) as any)}
      {...((type == "button" ? buttonProps : {}) as any)}
    >
      {children}
    </Tag>
  );
}

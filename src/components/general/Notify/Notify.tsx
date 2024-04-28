"use client";

import { AnimatePresence, MotionDiv } from "@/utils/libs/motion";
import { useEffect, useState } from "react";
import style from "./Notify.module.scss";

export function Notify({
  state,
  type,
}: {
  state: {
    title: string;
    description: string;
  };
  type: "success" | "error";
}) {
  const [open, setOpen] = useState(true);

  const { title, description } = state;

  useEffect(() => {
    setOpen(true);

    return () => {
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    };
  }, [state]);

  return (
    <AnimatePresence>
      {open ? (
        <MotionDiv
          className={`${style.notify} ${style[`notify--${type}`]}`}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: [-25, 0], opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          key="notify"
        >
          <h2>{title}</h2>
          <p>{description}</p>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  );
}

"use client";
import style from "./DefaultModal.module.scss";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AnimatePresence,
  MotionArticle,
  MotionButton,
  MotionDialog,
} from "@/utils/libs/motion";

export function DefaultModal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [open, setOpen] = useState(true);
  return (
    <AnimatePresence onExitComplete={() => router.back()} mode="sync">
      {open ? (
        <MotionDialog
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={"Modal"}
          className={style["modal"]}
          open
        >
          <MotionArticle
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            ref={ref}
            className={style["modal__wrapper"]}
          >
            <MotionButton
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close modal"
              onClick={() => setOpen(false)}
            >
              &times;
            </MotionButton>
            {children}
          </MotionArticle>
        </MotionDialog>
      ) : (
        <></>
      )}
    </AnimatePresence>
  );
}

import { MotionButton } from "@/utils/libs/motion";
import Link from "next/link";

export interface ButtonProps {
  type: "button" | "link";
  label?: string;
  href?: string;
  target?: string;
  linkProps?: React.ComponentProps<typeof Link>;
  buttonProps?: React.ComponentProps<typeof MotionButton>;
  styleType: "default";
  children: React.ReactNode;
}

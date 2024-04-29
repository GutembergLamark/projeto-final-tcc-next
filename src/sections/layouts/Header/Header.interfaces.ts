import { JWTPayload } from "jose";

export interface HeaderNavProps {
  responsivity: "mobile" | "desktop";
  suggestion: Array<{ url: string; title: string }>;
  payload: JWTPayload | null;
}

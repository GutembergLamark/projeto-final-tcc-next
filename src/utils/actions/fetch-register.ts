"use server";

import { redirect } from "next/navigation";

export async function register(data: FormData) {
  redirect("/");
}

"use server";

import { redirect } from "next/navigation";

export async function login(data: FormData) {
  redirect("/dashboard");
}

"use server";

import { redirect } from "next/navigation";

export async function register(data: FormData) {
  return await fetch(`${process.env.API_HOST}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => res);
  redirect("/");
}

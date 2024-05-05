"use server";

import { decrypt } from "@/utils/libs/jose";
import { JWTPayload } from "jose";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function updateUser<T>(data: FormData): Promise<T> {
  const payload: JWTPayload | null = await decrypt(
    cookies().get("session")?.value
  );
  return await fetch(`${process.env.API_HOST}/users/${payload?.sub}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies().get("session")?.value,
    },
    body: JSON.stringify({
      username: data.get("username"),
      email: data.get("email"),
      cpf: data.get("cpf"),
      password: data.get("password"),
    }),
    next: { tags: ["user"] },
  })
    .then((res) => res.json())
    .then((res) => {
      revalidateTag("user");
      redirect("/profile");
    });
}

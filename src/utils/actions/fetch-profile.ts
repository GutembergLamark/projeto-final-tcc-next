"use server";

import { cookies } from "next/headers";

export async function getProfile<T>(id: string): Promise<T> {
  return await fetch(`${process.env.API_HOST}/users/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies().get("session")?.value,
    },
    next: { tags: ["user"] },
  })
    .then((res) => res.json())
    .then((res) => res);
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function deleteUser(id: string) {
  const response = await fetch(`${process.env.API_HOST}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies().get("session")?.value,
    },
  })
    .then((res) => res.json())
    .then((res) => res)
    .catch((error) => console.log("Failed to fetch", error));

  if (response) redirect("/");
}

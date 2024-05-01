"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function createOrder(prevState: any, data: FormData) {
  const response = await fetch(`${process.env.API_HOST}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies().get("session")?.value,
    },
    body: JSON.stringify({
      days: data.get("days"),
      userId: data.get("user"),
      bookId: data.get("book"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        return {
          title: "Error",
          description: res.error,
        };
      }

      if (res.status === "error") {
        return {
          title: "Error",
          description: res.message,
        };
      }

      revalidateTag("book");

      return {
        title: "Success",
        description: "Livro Solicitado",
      };
    })
    .catch((error) => {
      return {
        title: "Error",
        description: "Tente novamente mais tarde",
      };
    });

  if (response.title === "Success") redirect("/dashboard");

  return response;
}

"use server";

import { redirect } from "next/navigation";

export async function createOrder(prevState: any, data: FormData) {
  const response = await fetch(`${process.env.API_HOST}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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

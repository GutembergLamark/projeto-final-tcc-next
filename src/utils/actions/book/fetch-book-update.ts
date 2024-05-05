"use server";

import { decrypt } from "@/utils/libs/jose";
import { JWTPayload } from "jose";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function updateBook(prevState: any, data: FormData) {
  const response = await fetch(
    `${process.env.API_HOST}/books/${data?.get("id")}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + cookies().get("session")?.value,
      },
      body: JSON.stringify({
        title: data.get("title"),
        category: data.get("category"),
        author: data.get("author"),
        published_date: data.get("published_date"),
        synopsis: data.get("synopsis"),
        image: data.get("image"),
        pages: data.get("pages"),
      }),
    }
  )
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
          description: res.error,
        };
      }

      revalidateTag("book");

      return {
        title: "Success",
        description: "Livro atualizado com sucesso",
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

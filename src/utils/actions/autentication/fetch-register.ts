"use server";

import { redirect } from "next/navigation";

export async function register(prevState: any, data: FormData) {
  const response = await fetch(`${process.env.API_HOST}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.get("username"),
      email: data.get("email"),
      password: data.get("password"),
      cpf: data.get("cpf"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        return {
          title: "Error",
          description: res.error,
          user: {},
        };
      }

      if (res.status === "error") {
        return {
          title: "Error",
          description: res.error,
          user: {},
        };
      }

      return {
        title: "Success",
        description: "Usuário criado com sucesso",
        user: res.user,
      };
    })
    .catch((error) => {
      return {
        title: "Error",
        description: "Tente novamente mais tarde",
        user: {},
      };
    });

  if (response.user.id) redirect("/");

  return response;
}

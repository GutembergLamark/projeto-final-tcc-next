"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createSession } from "../libs/jose";

export async function login(prevState: any, data: FormData) {
  const response = await fetch(`${process.env.API_HOST}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: data.get("email"),
      password: data.get("password"),
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        return {
          title: "Error",
          description: res.error,
          token: "",
        };
      }

      if (res.status === "error") {
        return {
          title: "Error",
          description: res.message,
          token: "",
        };
      }

      return {
        title: "Success",
        description: "Login Realizado",
        token: res.token,
      };
    })
    .catch((error) => {
      return {
        title: "Error",
        description: "Tente novamente mais tarde",
        token: "",
      };
    });

  if (response?.token) {
    createSession(response.token);
  }

  return response;
}

export async function deleteSession() {
  cookies().delete("session");
  redirect("/");
}

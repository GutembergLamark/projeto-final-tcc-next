"use server";

export async function getBooks<T>(): Promise<T> {
  return await fetch(`${process.env.API_HOST}/books`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["book"] },
  })
    .then((res) => res.json())
    .then((res) => res);
}

export async function getBookByTitle<T>(title: string): Promise<T> {
  return await fetch(`${process.env.API_HOST}/books/title?title=${title}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { tags: ["book"] },
  })
    .then((res) => res.json())
    .then((res) => res);
}

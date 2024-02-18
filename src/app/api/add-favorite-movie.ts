"use server";

import { revalidateTag } from "next/cache";

export const addFavoriteMovie = async (data: any) => {
  const response = await fetch("http://localhost:3001/favorites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("favorites");
  return response.json();
};

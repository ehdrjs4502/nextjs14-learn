"use server";

import { revalidateTag } from "next/cache";

export const delFavoriteMovie = async (data: any) => {
  const response = await fetch("http://localhost:3001/favorites", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("favorites");
  return response.json();
};

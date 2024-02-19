"use server";

import { SERVER_URL } from "@/constans";
import { revalidateTag } from "next/cache";

export const delFavoriteMovie = async (data: any) => {
  const response = await fetch(`${SERVER_URL}/favorites`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("favorites");
  return response.json();
};

"use server";

import { SERVER_URL } from "@/constans";
import { revalidateTag } from "next/cache";

export const addFavoriteMovie = async (data: any) => {
  const response = await fetch(`${SERVER_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  revalidateTag("favorites");
  return response.json();
};

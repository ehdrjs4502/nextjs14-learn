"use server";

import { SERVER_URL } from "@/constans";
import { revalidatePath, revalidateTag } from "next/cache";

export const addFavoriteMovie = async (data: any) => {
  const response = await fetch(`${SERVER_URL}/favorites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // revalidateTag("favorites");
  // revalidatePath("/user/[id]", "page"); // 해당 경로에 data를 업데이트
  return response.json();
};

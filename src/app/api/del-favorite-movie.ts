"use server";

import { SERVER_URL } from "@/constans";
// import { revalidatePath, revalidateTag } from "next/cache";

export const delFavoriteMovie = async (data: any) => {
  const response = await fetch(`${SERVER_URL}/favorites`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // revalidateTag("favorites"); // 해당 태그의 data를 업데이트
  // revalidatePath("/user/favorites", "page"); // 해당 경로의 data를 업데이트
  return response.json();
};

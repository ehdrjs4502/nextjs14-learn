"use server";

import { SERVER_URL } from "@/constans";

export const getFavoriteMovies = async (id: any) => {
  // tag 방식
  // const response = await fetch(`${SERVER_URL}/favorites/${id}`, { next: { tags: ["favorites"] } });

  const response = await fetch(`${SERVER_URL}/favorites/${id}`);
  return response.json();
};

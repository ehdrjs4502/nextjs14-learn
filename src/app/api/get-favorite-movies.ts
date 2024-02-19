"use server";

import { SERVER_URL } from "@/constans";

export const getFavoriteMovies = async (id: any) => {
  const response = await fetch(`${SERVER_URL}/favorites/${id}`, { next: { tags: ["favorites"] } });
  return response.json();
};

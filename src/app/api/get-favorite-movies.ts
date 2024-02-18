"use server";

export const getFavoriteMovies = async (id: any) => {
  const response = await fetch(`http://localhost:3001/favorites/${id}`, { next: { tags: ["favorites"] } });
  return response.json();
};

export const getFavoriteMovies = async (id: any) => {
  try {
    const response = await fetch(`http://localhost:3001/favorites/${id}`);
    console.log(id);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

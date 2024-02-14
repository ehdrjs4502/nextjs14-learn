import { URL } from "../../(home)/page";

async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("something broke...");
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div>
      <h4>{movie.title}</h4>
    </div>
  );
}

import Link from "next/link";
import Button from "../_components/Button";

export const metadata = {
  title: "Home",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(URL);
  return response.json();
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {movies.map((movie: any) => (
        <li>
          <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
      <Button />
    </div>
  );
}

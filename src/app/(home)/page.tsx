import Link from "next/link";
import Button from "../_components/Button";

export const metadata = {
  title: "Home",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

// 영화 목록 불러오는 함수 (서버사이드렌더링)
async function getMovies() {
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

import Movie from "../_components/movies/movie";
import style from "../styles/home.module.css";

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
    <div className={style.container}>
      {movies.map((movie: any) => (
        <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
      ))}
    </div>
  );
}

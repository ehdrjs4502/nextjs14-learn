import { URL } from "../../(home)/page";
import style from "../../styles/movies/movie-info.module.css";

export async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("something broke...");
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img src={movie.poster_path} className={style.poster} alt={movie.title} />
      <div className={style.info}>
        <h1 className={style.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}

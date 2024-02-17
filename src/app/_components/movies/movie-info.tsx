import { getMovie } from "@/app/api/get-movie";
import style from "../../styles/movies/movie-info.module.css";
import Link from "next/link";
import MovieGenres from "./movie-genres";
import LikeButton from "../like-button";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <img src={movie.poster_path} className={style.poster} alt={movie.title} />
      <div className={style.info}>
        <h1 className={style.title}>{movie.title}</h1>
        <span>
          {movie.release_date} | {movie.runtime}분
        </span>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <MovieGenres genres={movie.genres} />
        <div className={style.links}>
          <a href={movie.homepage} target={"_blank"}>
            공식 홈페이지 &rarr;
          </a>
          <Link href={`/movies/${id}/similar`}>관련 영화 &rarr;</Link>
        </div>
        <LikeButton movieID={id} title={movie.title} postURL={movie.poster_path} />
      </div>
    </div>
  );
}

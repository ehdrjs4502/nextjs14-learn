import Movie from "../movies/movie";
import style from "@/app/styles/user/favorite-movies.module.css";

export default function FavoriteMovies({ movies }: any) {
  return (
    <div className={style.container}>
      {movies.map((movie: any) => (
        <Movie key={movie.id} id={movie.movie_id} poster_path={movie.post_url} title={movie.movie_title} />
      ))}
    </div>
  );
}

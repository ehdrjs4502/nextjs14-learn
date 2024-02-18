import { getFavoriteMovies } from "@/app/api/get-favorite-movies";
import FavoriteMovies from "../../_components/user/favorite-movies";
import style from "../../styles/user/page.module.css";

export default async function User({ params }: any) {
  const movies = await getFavoriteMovies(params.id);
  console.log(movies);
  return (
    <div className={style.container}>
      <h4>찜한 영화 목록</h4>
      <FavoriteMovies movies={movies} />
    </div>
  );
}

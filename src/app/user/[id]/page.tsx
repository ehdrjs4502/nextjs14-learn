import { getFavoriteMovies } from "@/app/_api/get-favorite-movies";
import FavoriteMovies from "../../_components/user/favorite-movies";
import style from "../../_styles/user/page.module.css";

export default async function User({ params }: any) {
  const movies = await getFavoriteMovies(params.id);

  if (movies.message === "Failed to fetch favorites")
    return (
      <div className={style.container}>
        <h4>올바르지 않은 사용자입니다.</h4>
      </div>
    );

  return (
    <div className={style.container}>
      <h4>찜한 영화 목록</h4>
      <FavoriteMovies movies={movies} />
    </div>
  );
}

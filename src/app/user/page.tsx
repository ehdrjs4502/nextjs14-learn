import FavoriteMovies from "../_components/user/favorite-movies";
import style from "../styles/user/page.module.css";

export default function User() {
  return (
    <div className={style.container}>
      <h4>찜한 영화 목록</h4>
      <FavoriteMovies />
    </div>
  );
}

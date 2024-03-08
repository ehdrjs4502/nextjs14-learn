"use client";
import { useSession } from "next-auth/react";
import FavoriteMovies from "../../_components/user/favorite-movies";
import style from "../../_styles/user/page.module.css";
import useFavoriteMovies from "@/_hooks/useFavoriteMovies";
import { useRouter } from "next/navigation";

export default function User() {
  const { favoriteMovies } = useFavoriteMovies();
  const { data: session } = useSession();
  const rotuer = useRouter();

  if (session === null) {
    rotuer.push("/login");
  }

  return (
    <div className={style.container}>
      <h4>선호 영화 목록</h4>
      <FavoriteMovies movies={favoriteMovies} />
    </div>
  );
}

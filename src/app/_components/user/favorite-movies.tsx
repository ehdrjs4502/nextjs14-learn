"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Movie from "../movies/movie";
import style from "../../styles/user/favorite-movies.module.css";
import { getFavoriteMovies } from "@/app/api/get-favorite-movies";

export default function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const fetchData = async (id: string) => {
    const favoriteMovies = await getFavoriteMovies(id);
    setMovies(favoriteMovies);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    fetchData(id);
  }, []);

  return (
    <div className={style.container}>
      {movies.map((movie: any) => (
        <Movie key={movie.id} id={movie.movie_id} poster_path={movie.post_url} title={movie.movie_title} />
      ))}
    </div>
  );
}

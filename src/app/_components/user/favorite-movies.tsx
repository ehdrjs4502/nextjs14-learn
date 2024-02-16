"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Movie from "../movies/movie";
import style from "../../styles/home.module.css";

export default function FavoriteMovies() {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const getFavoriteMovies = async (id: any) => {
    try {
      const response = await fetch(`http://localhost:3001/favorites/${id}`);
      console.log(id);
      const data = await response.json();
      console.log(data);
      setMovies(data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id === null) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
    } else {
      console.log("ㅎㅇ");
      getFavoriteMovies(id);
    }
  }, []);

  return (
    <div className={style.container}>
      {movies.map((movie: any) => (
        <Movie key={movie.movie_id} id={movie.movie_id} poster_path={movie.post_url} title={movie.movie_title} />
      ))}
    </div>
  );
}

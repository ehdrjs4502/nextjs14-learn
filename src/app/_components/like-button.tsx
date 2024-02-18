"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getFavoriteMovies } from "../api/get-favorite-movies";
import style from "../styles/like-button.module.css";
import { addFavoriteMovie } from "../api/add-favorite-movie";

interface ILikeButtonProps {
  movieID: string;
  title: string;
  postURL: string;
}

export default function LikeButton({ movieID, title, postURL }: ILikeButtonProps) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  const fetchData = async (id: any) => {
    const favoriteMovies = await getFavoriteMovies(id);
    setMovies(favoriteMovies);
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    fetchData(id);
  }, []);

  const isMovieIdExist = () => {
    return movies.some((movie: any) => movie.movie_id === movieID);
  };

  const onClickLikeBtn = async () => {
    const id = localStorage.getItem("id");
    if (!id) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    const likeReqData = {
      userID: id,
      movieID,
      title,
      postURL,
    };

    const unLikeReqData = {
      userID: id,
      movieID,
    };

    const method = isMovieIdExist() ? "DELETE" : "POST";

    const response = await addFavoriteMovie(likeReqData);
    console.log(response);
    fetchData(id);
  };
  return (
    <div>
      <button className={style.btn} onClick={onClickLikeBtn}>
        {isMovieIdExist() ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

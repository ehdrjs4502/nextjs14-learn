"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getFavoriteMovies } from "../_api/get-favorite-movies";
import style from "../_styles/like-button.module.css";
import { addFavoriteMovie } from "../_api/add-favorite-movie";
import { delFavoriteMovie } from "../_api/del-favorite-movie";

interface ILikeButtonProps {
  movieID: string;
  title: string;
  postURL: string;
}

export default function LikeButton({ movieID, title, postURL }: ILikeButtonProps) {
  const [movies, setMovies] = useState([]);
  const router = useRouter();

  // 영화 찜 목록 불러오기
  const fetchData = async (id: any) => {
    const response = await getFavoriteMovies(id);
    if (response.message === "Failed to fetch favorites") return;
    setMovies(response);
  };

  // 첫 마운트 되면 로컬스토리지에 있는 id로 찜 목록 불러오기
  useEffect(() => {
    const id = localStorage.getItem("id");
    fetchData(id);
  }, []);

  // 영화가 찜 영화 목록에 있는 지 판단
  const isMovieIdExist = () => {
    return movies.some((movie: any) => movie.movie_id === movieID);
  };

  const onClickBtn = async () => {
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

    // 영화가 이미 찜 목록에 있으면 삭제 api 실행, 아니면 추가 api 실행
    const response = isMovieIdExist() ? await delFavoriteMovie(unLikeReqData) : await addFavoriteMovie(likeReqData);
    console.log(response);
    fetchData(id);
  };
  return (
    <div>
      <button className={style.btn} onClick={onClickBtn}>
        {isMovieIdExist() ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

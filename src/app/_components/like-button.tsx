"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getFavoriteMovies } from "../_api/get-favorite-movies";
import style from "../_styles/like-button.module.css";
import { addFavoriteMovie } from "../_api/add-favorite-movie";
import { delFavoriteMovie } from "../_api/del-favorite-movie";
import { getIdFromLocalStorage } from "@/_utils/localStorageHelper";

interface ILikeButtonProps {
  movieID: string;
  title: string;
  postURL: string;
}

export default function LikeButton({ movieID, title, postURL }: ILikeButtonProps) {
  const [movies, setMovies] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();

  // 영화 찜 목록 불러오기
  const fetchData = async (id: any) => {
    const response = await getFavoriteMovies(id);
    if (response.message === "Failed to fetch favorites") return;
    setMovies(response);
  };

  useEffect(() => {
    let id = getIdFromLocalStorage("id");
    if (id !== null) {
      setIsLogin(true);
      setId(id); // id 상태 업데이트
      fetchData(id); // fetchData 함수 호출
    }
  }, []);

  // 영화가 찜 영화 목록에 있는 지 판단
  const isMovieLiked = () => {
    return movies.some((movie: any) => movie.movie_id === movieID);
  };

  const onClickBtn = async () => {
    if (!isLogin) {
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
    const response = isMovieLiked() ? await delFavoriteMovie(unLikeReqData) : await addFavoriteMovie(likeReqData);
    console.log(response);
    fetchData(id);
  };
  return (
    <div>
      <button className={style.btn} onClick={onClickBtn}>
        {isMovieLiked() ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

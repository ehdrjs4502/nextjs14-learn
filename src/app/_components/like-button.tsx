"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getFavoriteMovies } from "../api/get-favorite-movies";
import { addFavoriteMovie } from "../api/add-favorite-movie";
import { delFavoriteMovie } from "../api/del-favorite-movie";
import useUserInfo from "@/_hooks/useUserInfo";
import IconButton from "./ui/icon-button";
import { useSession } from "next-auth/react";

interface ILikeButtonProps {
  movieID: string;
  title: string;
  postURL: string;
}

export default function LikeButton({ movieID, title, postURL }: ILikeButtonProps) {
  const [movies, setMovies] = useState([]);
  const { data: session } = useSession();
  const sessionId = session?.user?.name;
  const router = useRouter();

  // 영화 찜 목록 불러오기
  const fetchData = async (id: any) => {
    const response = await getFavoriteMovies(id);
    if (response.message === "Failed to fetch favorites") return;
    setMovies(response);
  };

  useEffect(() => {
    if (session !== undefined) {
      fetchData(sessionId); // fetchData 함수 호출
    }
  }, [session]);

  // 영화가 찜 영화 목록에 있는 지 판단
  const isMovieLiked = () => {
    return movies.some((movie: any) => movie.movie_id === movieID);
  };

  const toggoleLikeStatus = async () => {
    if (session === null) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    const likeReqData = {
      userID: sessionId,
      movieID,
      title,
      postURL,
    };

    const unLikeReqData = {
      userID: sessionId,
      movieID,
    };

    // 영화가 이미 찜 목록에 있으면 삭제 api 실행, 아니면 추가 api 실행
    const response = isMovieLiked() ? await delFavoriteMovie(unLikeReqData) : await addFavoriteMovie(likeReqData);
    console.log(response);
    fetchData(sessionId);
  };
  return (
    <div>
      <IconButton onClick={toggoleLikeStatus} icon={isMovieLiked() ? "❤️" : "🤍"} />
    </div>
  );
}

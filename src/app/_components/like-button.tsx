"use client";

import { useRouter } from "next/navigation";
import IconButton from "./ui/icon-button";
import { useSession } from "next-auth/react";
import useFavoriteMovies from "@/_hooks/useFavoriteMovies";

interface ILikeButtonProps {
  movieID: string;
  title: string;
  postURL: string;
}

export default function LikeButton({ movieID, title, postURL }: ILikeButtonProps) {
  const { data: session } = useSession();
  const sessionId = session?.user?.name;
  const { favoriteMovies, delFavoriteMovie, addFavoriteMovie } = useFavoriteMovies();
  const router = useRouter();

  // 영화가 찜 영화 목록에 있는 지 판단
  const isMovieLiked = () => {
    return favoriteMovies.some((movie: any) => movie.movie_id === movieID);
  };

  const toggoleLikeStatus = () => {
    if (session === null) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    const likeReqData = {
      user_id: sessionId,
      movie_id: movieID,
      movie_title: title,
      post_url: postURL,
    };

    const unLikeReqData = {
      user_id: sessionId,
      movie_id: movieID,
    };

    // 영화가 이미 찜 목록에 있으면 삭제, 아니면 추가 함수 실행
    isMovieLiked() ? delFavoriteMovie(unLikeReqData) : addFavoriteMovie(likeReqData);
  };

  return (
    <div>
      <IconButton onClick={toggoleLikeStatus} icon={isMovieLiked() ? "❤️" : "🤍"} />
    </div>
  );
}

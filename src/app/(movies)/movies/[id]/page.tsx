import MovieInfo from "@/app/_components/movies/movieInfo";
import { URL } from "../../../(home)/page";
import MovieVideos from "@/app/_components/movies/movieVideos";
import { Suspense } from "react";

export default async function MovieDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<h1>영화 정보 불러오는 중...</h1>}>
        <MovieInfo id={params.id} />
      </Suspense>
      <Suspense fallback={<h1>영화 영상 불러오는 중...</h1>}>
        <MovieVideos id={params.id} />
      </Suspense>
    </div>
  );
}

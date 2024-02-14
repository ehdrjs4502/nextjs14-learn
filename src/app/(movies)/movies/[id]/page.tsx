import MovieCreadits from "@/app/_components/movies/movie-credits";
import MovieInfo, { getMovie } from "@/app/_components/movies/movie-info";
import MovieVideos from "@/app/_components/movies/movie-videos";
import { Suspense } from "react";

interface IParameters {
  params: { id: string };
}

// 동적 메타데이터
export async function generateMetadata({ params: { id } }: IParameters) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } }: IParameters) {
  return (
    <div>
      <Suspense fallback={<h1>영화 정보 불러오는 중...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense>
        <MovieCreadits id={id} />
      </Suspense>
      <Suspense fallback={<h1>영화 영상 불러오는 중...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

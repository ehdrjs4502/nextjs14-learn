import Movie from "@/app/_components/movies/movie";
import { API_URL } from "@/constans";
import style from "../../../../_styles/movies/similar-page.module.css";
import Link from "next/link";
import { getMovie } from "@/app/_api/get-movie";

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

async function getSimilarMovies(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function SimilarMovies({ params: { id } }: IParameters) {
  const similarMovies = await getSimilarMovies(id);
  const movie = await getMovie(id);
  return (
    <div className={style.container}>
      <Link href={`/movies/${id}`} className={style.link}>
        &larr; 이전
      </Link>
      <h4>{movie.title} | 관련 영화</h4>
      <div className={style.similarList}>
        {similarMovies.map((movie: any) => (
          <Movie key={movie.id} title={movie.title} id={movie.id} poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}

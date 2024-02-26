import { API_URL } from "@/constans";
import style from "../../_styles/movies/movie-videos.module.css";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`${API_URL}/${id}/videos`);

  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  const trailer = videos.filter((video: any) => video.type == "Trailer")[0]; // 예고편만 변수에 저장
  return (
    <div className={style.container}>
      <h4>공식 트레일러</h4>
      <div className={style.video}>
        <iframe
          key={trailer.id}
          src={`https://youtube.com/embed/${trailer.key}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={trailer.name}
        />
      </div>
    </div>
  );
}

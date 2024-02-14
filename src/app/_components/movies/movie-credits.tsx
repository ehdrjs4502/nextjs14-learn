import { API_URL } from "@/constans";
import style from "../../styles/movies/movie-credits.module.css";
import Credit from "./credit";

async function getCredits(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`${API_URL}/${id}/credits`);

  return response.json();
}

export default async function MovieCreadits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={style.container}>
      <h4>등장인물</h4>
      <div className={style.credit}>
        {credits.map((credit: any) => (
          <Credit key={credit.id} name={credit.name} profile_path={credit.profile_path} character={credit.character} />
        ))}
      </div>
    </div>
  );
}

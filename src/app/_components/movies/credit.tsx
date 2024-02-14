import style from "../../styles/movies/credit.module.css";

interface ICreditProps {
  name: string;
  character: string;
  profile_path: string;
}

export default function Credit({ name, character, profile_path }: ICreditProps) {
  return (
    <div className={style.container}>
      <img src={profile_path} alt={name} />
      <div className={style.info}>
        <span>{name}</span>
        <span>{character}</span>
      </div>
    </div>
  );
}

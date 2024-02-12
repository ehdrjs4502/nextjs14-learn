import Button from "../_components/Button";

export const metadata = {
  title: "Home",
};

const url = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(url);
  return response.json();
}

export default async function Home() {
  const movies = await getMovies();
  return (
    <div>
      {JSON.stringify(movies)}
      <Button />
    </div>
  );
}

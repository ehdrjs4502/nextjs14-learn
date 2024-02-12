import { URL } from "../../(home)/page";

async function getVideos(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 4000));
  const response = await fetch(`${URL}/${id}/videos`);

  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);

  return (
    <div>
      <h4>{JSON.stringify(videos)}</h4>
    </div>
  );
}

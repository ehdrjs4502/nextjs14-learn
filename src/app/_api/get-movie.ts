import { API_URL } from "@/constans";

// 영화 정보 불러오기
export async function getMovie(id: string) {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  // throw new Error("something broke...");
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

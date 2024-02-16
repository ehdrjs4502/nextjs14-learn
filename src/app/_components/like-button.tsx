"use client";

export default function LikeButton({ movieID, title, postURL }: { movieID: string; title: string; postURL: string }) {
  const onClickLikeBtn = async () => {
    try {
      const reqData = {
        userID: "test",
        movieID,
        title,
        postURL,
      };
      const response = await fetch("http://localhost:3001/favorites", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reqData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };
  return (
    <div>
      <button onClick={onClickLikeBtn}>❤️</button>
    </div>
  );
}

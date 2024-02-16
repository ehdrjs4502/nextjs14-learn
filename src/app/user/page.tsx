"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function User() {
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // next.js는 무조건 서버사이드렌더링 하기때문에 useEffect로 클라이언트가 렌더링 시 localStorage 접근하도록 함
    if (localStorage.getItem("id") === null) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
    }

    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <h4>{id}</h4>
    </div>
  );
}

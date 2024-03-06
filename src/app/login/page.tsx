"use client";

import useUserInfo from "@/_hooks/useFavoriteMovies";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "../_styles/login.module.css";

export default function Login() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const { setUserInfo } = useUserInfo(); // zustand 라이브러리 사용
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", { id, pw, redirect: false }); // NextAuth의 signIn 함수를 사용하여 로그인 시도
    if (res?.ok) {
      router.push("/");
      router.refresh();
    }

    if (res?.status === 401) {
      setIsInvalid(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.box}>
        <h4>Login</h4>
        <span>test 계정으로 로그인하실 수 있습니다.</span>
        <form>
          <div>
            <input
              type="text"
              id="id"
              name="id"
              autoFocus
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="test"
            />
          </div>
          <div>
            <input
              type="password"
              id="pw"
              name="pw"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="1234"
            />
          </div>
          {isInvalid && <b>유효하지 않은 ID입니다.</b>}
          <button
            type="button"
            onClick={(e) => {
              handleSubmit(e);
            }}
            className={style.btn}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

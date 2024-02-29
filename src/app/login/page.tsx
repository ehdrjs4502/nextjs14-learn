"use client";

import useUserInfo from "@/_hooks/useUserInfo";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const { setUserInfo } = useUserInfo(); // zustand 라이브러리 사용
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", { id, pw, redirect: false });
    console.log(res);
    if (res?.ok) {
      router.push("/");
    }

    if (res?.status === 401) {
      setIsInvalid(true);
    }
  };

  return (
    <div>
      <h4>Login</h4>
      <span>test 계정으로 로그인하실 수 있습니다.</span>
      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="text" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} placeholder="test" />
        </div>
        <div>
          <label htmlFor="pw">Password:</label>
          <input
            type="password"
            id="pw"
            name="pw"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="1234"
          />
        </div>
        <button
          type="button"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Login
        </button>
        {isInvalid && <span>유효하지 않은 ID입니다.</span>}
      </form>
    </div>
  );
}

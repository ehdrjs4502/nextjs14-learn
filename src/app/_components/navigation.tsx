"use client";
import Link from "next/link";
import style from "../_styles/navigation.module.css";
import { useRouter } from "next/navigation";
import { getIdFromLocalStorage } from "@/_utils/localStorageHelper";
import { useEffect, useState } from "react";
import useUserInfo from "@/_hooks/useUserInfo";
export default function Navigation() {
  const router = useRouter();
  const { userInfo, deleteUserInfo } = useUserInfo(); // zustand 라이브러리 사용
  const [id, setId] = useState("");

  useEffect(() => {
    let id = getIdFromLocalStorage("id");
    if (id !== null || id === "") {
      setId(id); // id 상태 업데이트
    }
  }, [userInfo]);

  const linkToUser = () => {
    if (!id) {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
      return;
    }

    router.push(`/user/${id}`);
  };

  const onClickLogOut = () => {
    deleteUserInfo();
  };

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a onClick={() => linkToUser()}>User</a>
        </li>
        <li>{id === null || id === "" ? <Link href="/login">Login</Link> : <a onClick={onClickLogOut}>Logout</a>}</li>
      </ul>
    </nav>
  );
}

"use client";
import Link from "next/link";
import style from "../_styles/navigation.module.css";
import { useRouter } from "next/navigation";
import useUserInfo from "@/_hooks/useUserInfo";
export default function Navigation() {
  const router = useRouter();
  const { userInfo, deleteUserInfo } = useUserInfo(); // zustand 라이브러리 사용

  const linkToUser = () => {
    if (userInfo.id === "") {
      alert("로그인 후 이용 가능합니다.");
      router.push("/login");
    } else {
      router.push(`/user/${userInfo.id}`);
    }
  };

  const handleLogged = () => {
    userInfo.id === "" ? router.push("/login") : deleteUserInfo();
  };

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a onClick={linkToUser}>User</a>
        </li>
        <li>
          <a onClick={handleLogged}>{userInfo.id === "" ? "login" : "logout"}</a>
        </li>
      </ul>
    </nav>
  );
}

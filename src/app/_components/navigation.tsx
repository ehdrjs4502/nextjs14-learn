"use client";
import Link from "next/link";
import style from "../_styles/navigation.module.css";
import { useRouter } from "next/navigation";
import { getIdFromLocalStorage } from "@/_utils/localStorageHelper";
export default function Navigation() {
  const router = useRouter();

  const linkToUser = () => {
    if (typeof window !== "undefined") {
      const id = getIdFromLocalStorage("id");
      console.log(id);
      if (id === null) {
        alert("로그인 후 이용 가능합니다.");
        router.push("/login");
        return;
      }

      router.push(`/user/${id}`);
    }
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
      </ul>
    </nav>
  );
}

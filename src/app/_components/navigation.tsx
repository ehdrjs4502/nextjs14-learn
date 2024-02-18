"use client";
import Link from "next/link";
import style from "../styles/navigation.module.css";
import { useRouter } from "next/navigation";
export default function Navigation() {
  const router = useRouter();

  const linkToUser = () => {
    if (typeof window !== "undefined") {
      // Perform localStorage action
      const id = localStorage.getItem("id");
      console.log(id);
      if (!id) {
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

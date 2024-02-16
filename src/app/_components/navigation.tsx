import Link from "next/link";
import style from "../styles/navigation.module.css";

export default function Navigation() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
      </ul>
    </nav>
  );
}

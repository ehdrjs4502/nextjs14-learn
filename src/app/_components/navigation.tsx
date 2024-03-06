import Link from "next/link";
import style from "../_styles/navigation.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignButton from "./sign-button";
export default async function Navigation() {
  const user = await getServerSession(authOptions);

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>{user && <Link href="/user/favorites">{user?.user.name}</Link>}</li>
        <li>
          <SignButton user={user} />
        </li>
      </ul>
    </nav>
  );
}

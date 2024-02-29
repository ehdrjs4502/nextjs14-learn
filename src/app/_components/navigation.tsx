import Link from "next/link";
import style from "../_styles/navigation.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignButton from "./signout-button";
export default async function Navigation() {
  const user = await getServerSession(authOptions);
  console.log("nav:", user);

  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={`/user/${user?.user.sub}`}>{user?.user.sub}</Link>
        </li>
        <SignButton user={user} />
      </ul>
    </nav>
  );
}

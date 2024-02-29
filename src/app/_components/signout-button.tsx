"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function SignButton(user: any) {
  if (user.user === null) {
    return <Link href="/login">login</Link>;
  }
  return <a onClick={() => signOut()}>logout</a>;
}

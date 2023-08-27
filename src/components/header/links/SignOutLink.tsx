"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { MAIN_ROUTE } from "@/const/routes";

const SignOutLink = () => {
  const handler = () => signOut();

  return (
    <div >
      <Link href={MAIN_ROUTE} onClick={handler}>
        Выйти
      </Link>
    </div>
  );
};

export default SignOutLink;

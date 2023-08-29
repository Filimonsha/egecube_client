"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_ROUTE, PROFILE_ROUTE } from "@/const/routes";

const LinkToProfile = () => {
  const pathname = usePathname();

  return (
    <div>
      {pathname.includes(PROFILE_ROUTE) ? (
        <Link href={MAIN_ROUTE}>Главная</Link>
      ) : (
        <Link href={PROFILE_ROUTE}>Профиль</Link>
      )}
    </div>
  );
};

export default LinkToProfile;

"use client";

import styles from "../header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUserBaseState } from "@/redux/selector/selectors";
import { UserBase } from "@/types/backend/user";
import { useEffect } from "react";

const LinkToProfile = () => {
  const pathname = usePathname();

  const { user }: { user: UserBase | null } = useSelector((store) =>
    selectUserBaseState(store),
  );

  useEffect(() => {
    console.log(user);
  });

  return (
    <div className={styles.headerElement}>
      {user === null
        ? pathname === "/" && <Link href={"/login"}>Войти</Link>
        : pathname === "/" && (
            <Link href={"/profile"}>Перейти в личный кабинет</Link>
          )}
    </div>
    // <div className={styles.headerElement}>
    //   {pathname === "/" && <Link href={"/profile"}>Войти</Link>}
    // </div>
  );
};

export default LinkToProfile;

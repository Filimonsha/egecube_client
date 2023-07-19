"use client";

import styles from "../header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectUserBaseState } from "@/redux/selector/selectors";
import { UserBase } from "@/types/backend/user";
import { useEffect } from "react";
import {LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE} from "@/const/routes";

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
      {!user
        ? pathname === MAIN_ROUTE && <Link href={LOGIN_ROUTE}>Войти</Link>
        : pathname === MAIN_ROUTE && (
            <Link href={PROFILE_ROUTE}>Перейти в личный кабинет</Link>
          )}
    </div>
  );
};

export default LinkToProfile;

"use client";

import styles from "../header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE } from "@/const/routes";
import { useAppSelector } from "@/hooks/hooks";
import {selectUserState} from "@/redux/selector/selectors";

const LinkToProfile = () => {
  const pathname = usePathname();

  const { userCredentials } = useAppSelector((state) => selectUserState(state));

  return (
    <div className={styles.headerElement}>
      {!userCredentials
        ? pathname === MAIN_ROUTE && <Link href={LOGIN_ROUTE}>Войти</Link>
        : pathname === MAIN_ROUTE && (
            <Link href={PROFILE_ROUTE}>Перейти в личный кабинет</Link>
          )}
    </div>
  );
};

export default LinkToProfile;

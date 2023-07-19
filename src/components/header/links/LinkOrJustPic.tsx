"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Cube from "@/components/funnyJokes/Cube";
import styles from "@/components/header/header.module.css";
import {MAIN_ROUTE} from "@/const/routes";

const LinkOrJustPic = () => {
  const pathname = usePathname();
  return (
    <div className={styles.headerElement}>
      {pathname !== MAIN_ROUTE ? (
        <Link href={MAIN_ROUTE}>
          <Cube />
        </Link>
      ) : (
        <Cube />
      )}
    </div>
  );
};

export default LinkOrJustPic;

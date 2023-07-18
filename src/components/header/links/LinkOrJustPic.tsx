"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Cube from "@/components/funnyJokes/Cube";
import styles from "@/components/header/header.module.css";

const LinkOrJustPic = () => {
  const pathname = usePathname();
  return (
    <div className={styles.headerElement}>
      {pathname !== "/" ? (
        <Link href={"/"}>
          <Cube />
        </Link>
      ) : (
        <Cube />
      )}
    </div>
  );
};

export default LinkOrJustPic;

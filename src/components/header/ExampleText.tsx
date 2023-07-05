"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ExampleText = () => {
  const pathname = usePathname();

  return (
    <div className={styles.headerElement}>
      {pathname === "/" && (
        <Link href={"/profile"}>перейти в личный кабинет!!</Link>
      )}
    </div>
  );
};

export default ExampleText;

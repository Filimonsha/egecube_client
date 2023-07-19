import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";

const activeToTextStyle = (currentPath: string, targetPath: string) => {
  return currentPath === targetPath ? styles.activeLink : styles.inactiveLink;
};

interface MenuItemProps {
  children: React.ReactNode;
  currentPath: string;
  targetPath: string;
}

const Item = ({ children, currentPath, targetPath }: MenuItemProps) => {
  return (
    <Link
      href={targetPath}
      className={activeToTextStyle(currentPath, targetPath)}
    >
      {children}
    </Link>
  );
};

export default Item;

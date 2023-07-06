"use client";

import styles from "./sidebar.module.css";
import Menu from "@/components/sidebar/menu/Menu";
import { usePathname } from "next/navigation";

const paths = [
  "/profile",
  "/profile/homework",
  "/profile/schedule",
  "/profile/edu_materials",
];
const menuElements = [
  <span>Главная</span>,
  <span>Домашние работы</span>,
  <span>Расписание</span>,
  <span>Учебные материалы</span>,
];

const LeftSidebar = () => {
  const currentPath = usePathname();

  return (
    <div className={styles.sidebarContainer}>
      <Menu
        currentPath={currentPath}
        paths={paths}
        menuElements={menuElements}
      />
    </div>
  );
};

export default LeftSidebar;

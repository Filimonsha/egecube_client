"use client";

import styles from "./sidebar.module.css";
import Menu from "@/components/sidebar/menu/Menu";
import { usePathname } from "next/navigation";
import {PROFILE_HOMEWORK_ROUTE, PROFILE_MATERIALS_ROUTE, PROFILE_ROUTE, PROFILE_SCHEDULE_ROUTE} from "@/const/routes";

const paths = [
  PROFILE_ROUTE,
  PROFILE_HOMEWORK_ROUTE,
  PROFILE_SCHEDULE_ROUTE,
  PROFILE_MATERIALS_ROUTE,
];
const menuElements = [
  <span>Главная</span>,
  <span>Домашние работы</span>,
  <span>Расписание</span>,
  <span>Учебные материалы</span>,
];

const Sidebar = () => {
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

export default Sidebar;

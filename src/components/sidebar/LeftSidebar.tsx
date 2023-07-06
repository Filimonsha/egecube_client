import styles from "./sidebar.module.css";
import SidebarElement from "@/components/sidebar/SidebarElement";

const LeftSidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <SidebarElement>
        <span>Главная</span>
      </SidebarElement>
      <SidebarElement>
        <span>Домашние работы</span>
      </SidebarElement>
      <SidebarElement>
        <span>Расписание</span>
      </SidebarElement>
      <SidebarElement>
        <span>Учебные материалы</span>
      </SidebarElement>
    </div>
  );
};

export default LeftSidebar;

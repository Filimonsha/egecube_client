import React from "react";
import styles from "./sidebar.module.css";

const SidebarElement = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.sidebarElement}>{children}</div>;
};

export default SidebarElement;

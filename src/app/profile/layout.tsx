import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import styles from "@/components/profile/profile.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.profilePageContainer}>
      <div className={styles.profileElementsContainer}>
        <Sidebar />
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;

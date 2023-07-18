import React from "react";
import LeftSidebar from "@/components/sidebar/LeftSidebar";
import styles from "@/components/profile/profile.module.css";

const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.profilePageContainer}>
      <div className={styles.profileElementsContainer}>
        <LeftSidebar />
        <div className={styles.contentContainer}>{children}</div>
      </div>
    </div>
  );
};

export default ProfileLayout;

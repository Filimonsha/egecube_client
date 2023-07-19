import styles from "./schedule.module.css";
import React from "react";

const ElementContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.scheduleElement}>{children}</div>;
};

export default ElementContainer;

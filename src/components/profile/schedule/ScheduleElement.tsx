import styles from "./schedule.module.css";
import React from "react";

const ScheduleElement = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.scheduleElement}>{children}</div>;
};

export default ScheduleElement;

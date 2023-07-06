import styles from "@/components/profile/schedule/schedule.module.css";
import Schedule from "@/components/profile/schedule/Schedule";
import UpcomingEvent from "@/components/profile/schedule/event/UpcomingEvent";

const ProfileSchedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <Schedule />
      <UpcomingEvent />
    </div>
  );
};

export default ProfileSchedule;

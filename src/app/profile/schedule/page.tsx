import styles from "@/components/profile/schedule/schedule.module.css";
import UpcomingEvent from "@/components/profile/schedule/eventBlock/UpcomingEvent";
import ClassesCalendar from "@/components/profile/schedule/calendar/ClassesCalendar";
import InfoPanel from "@/components/profile/schedule/infoPanel/InfoPanel";

const ProfileSchedule = () => {
  return (
    <div className={styles.scheduleContainer}>
      <InfoPanel />
      <ClassesCalendar />
      <UpcomingEvent />
    </div>
  );
};

export default ProfileSchedule;

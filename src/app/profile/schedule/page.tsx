import styles from "../../../components/profile/profile.module.css";
import Schedule from "@/components/profile/schedule/Schedule";
import UpcomingEvent from "@/components/profile/schedule/event/UpcomingEvent";

const Profile = () => {
  return (
    <div className={styles.scheduleContainer}>
      <Schedule />
      <UpcomingEvent />
    </div>
  );
};

export default Profile;

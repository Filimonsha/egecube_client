import StandingCat from "@/components/funnyJokes/StandingCat";
import styles from "./profile.module.css";

const Profile = () => {
  return (
    <div className={styles.catContainer}>
      <StandingCat />
    </div>
  );
};

export default Profile;

import styles from "./rootPage.module.css";
import StandingGang from "@/components/funnyJokes/StandingGang";

const Main = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pageElementRow}>
        <h1>Главная</h1>
      </div>
      <StandingGang />
    </div>
  );
};

export default Main;

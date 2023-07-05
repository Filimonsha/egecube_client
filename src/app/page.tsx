import styles from "./rootPage.module.css";
import StandingCat from "@/components/funnyJokes/StandingCat";

const Main = () => {
  return (
    <div className={styles.page}>
      <div className={styles.pageElementRow}>
        <h1>Главная</h1>
      </div>
      <div className={styles.pageElementRow}>
        <StandingCat />
      </div>
    </div>
  );
};

export default Main;

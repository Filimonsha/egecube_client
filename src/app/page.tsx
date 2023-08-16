import styles from "./rootPage.module.css";
import StandingGang from "@/components/funnyJokes/StandingGang";
import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";

const Main = async () => {
    const session = await getServerSessionWithOptions()

    console.log(session, "session")
    return (
        <div className={styles.page}>
            <div className={styles.pageElementRow}>
                <h1>Главная</h1>
            </div>
            <StandingGang/>
        </div>
    );
};

export default Main;

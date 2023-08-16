import styles from "./rootPage.module.css";
import StandingGang from "@/components/funnyJokes/StandingGang";
import getServerSessionWithOptions from "@/utils/api/getServerSessionWithOptions";
import apiClient from "@/utils/api/sdk/sdk";

const Main = async () => {
    const homeworks = await (await apiClient.callApiWithSession()).getHomeworkService().getAllHomework()

    console.log(homeworks, "session")
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

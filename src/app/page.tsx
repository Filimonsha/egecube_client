import styles from "./rootPage.module.css";
import StandingGang from "@/components/funnyJokes/StandingGang";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

const Main = async () => {
    const session = await getServerSession(authOptions)

    console.log(session,"session")
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

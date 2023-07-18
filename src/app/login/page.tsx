import styles from "../rootPage.module.css";
import LoginForm from "@/components/form/login/LoginForm";
import TextLabel from "@/components/utils/textLabels/labels/TextLabel";
import TextHeading from "@/components/utils/textLabels/labels/TextHeading";

const layoutElements = [<TextHeading text={"Вход"} />, <LoginForm />];

const LoginPage = () => {
  return (
    <div className={styles.page}>
      {layoutElements.map((element) => (
        <div className={styles.pageElementRow}>{element}</div>
      ))}
    </div>
  );
};

export default LoginPage;

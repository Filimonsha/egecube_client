import styles from "../rootPage.module.css";
import TextHeading from "@/components/utils/textLabels/labels/TextHeading";
import RegisterForm from "@/components/form/register/RegisterForm";

const layoutElements = [<TextHeading text={"Регистрация"} />, <RegisterForm />];

const RegisterPage = () => {
  return (
    <div className={styles.page}>
      {layoutElements.map(element => (
        <div className={styles.pageElementRow}>{element}</div>
      ))}
    </div>
  );
};

export default RegisterPage;

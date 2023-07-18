import { FC } from "react";
import styles from "../../form.module.css";

interface FormElementInputProps {
  title: string;
  type: string;
}

const FormElementInput: FC<FormElementInputProps> = ({ title, type }) => {
  return (
    <div className={styles.formElementContainer}>
      <h4 className={styles.formElementItem}>{title}</h4>
      <input type={type} className={styles.formElementItem} />
    </div>
  );
};

export default FormElementInput;

import { FC } from "react";
import styles from "../../form.module.css";

interface FormElementButtonProps {
  title: string;
  id?: string;
}

const FormElementButton: FC<FormElementButtonProps> = ({ title, id }) => {
  return (
    <div className={styles.formElementItem} id={id ?? ""}>
      <button type={"submit"}>{title}</button>
    </div>
  );
};

export default FormElementButton;

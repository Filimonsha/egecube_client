import { FC, FormEvent } from "react";
import styles from "../../form.module.css";

interface FormElementInputProps {
  title: string;
  type: string;
  valueGetter: (string) => void;
}

const FormElementInput: FC<FormElementInputProps> = ({
  title,
  type,
  valueGetter,
}) => {
  const inputHandler = (event: FormEvent<HTMLInputElement>) => {
    valueGetter(event.currentTarget.value);
  };

  return (
    <div className={styles.formElementContainer}>
      <h4 className={styles.formElementItem}>{title}</h4>
      <input
        type={type}
        className={styles.formElementItem}
        onInput={inputHandler}
      />
    </div>
  );
};

export default FormElementInput;

import styles from "../labels.module.css";
import { FC } from "react";

interface TextLabelProps {
  text: string;
}

const TextHeading: FC<TextLabelProps> = ({ text }) => {
  return (
    <div className={styles.label}>
      <h2>{text}</h2>
    </div>
  );
};

export default TextHeading;

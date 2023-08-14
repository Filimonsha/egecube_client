import styles from "../labels.module.css";
import { FC } from "react";

interface TextLabelProps {
  text: string;
}

const TextLabel: FC<TextLabelProps> = ({ text }) => {
  return <div className={styles.label}>{text}</div>;
};

export default TextLabel;

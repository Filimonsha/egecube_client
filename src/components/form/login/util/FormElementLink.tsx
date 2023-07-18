import Link from "next/link";
import { FC } from "react";
import styles from "../../form.module.css";

interface FormElementLinkProps {
  title: string;
  url: string;
  id?: string;
}

const FormElementLink: FC<FormElementLinkProps> = ({ title, url, id }) => {
  return (
    <div className={styles.formElementItem} id={id ?? ""}>
      <Link href={url}>{title}</Link>
    </div>
  );
};

export default FormElementLink;

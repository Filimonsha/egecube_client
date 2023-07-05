import ExampleText from "@/components/header/ExampleText";
import styles from "./header.module.css";
import LinkOrJustPic from "@/components/header/LinkOrJustPic";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerElement}>
        <LinkOrJustPic />
      </div>
      <ExampleText />
    </header>
  );
};

export default Header;

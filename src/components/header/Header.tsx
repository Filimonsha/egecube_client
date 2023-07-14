import LinkToProfile from "@/components/header/LinkToProfile";
import styles from "./header.module.css";
import LinkOrJustPic from "@/components/header/LinkOrJustPic";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerElement}>
        <LinkOrJustPic />
      </div>
      <LinkToProfile />
    </header>
  );
};

export default Header;

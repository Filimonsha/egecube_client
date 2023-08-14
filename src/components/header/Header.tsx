import LinkToProfile from "@/components/header/links/LinkToProfile";
import styles from "./header.module.css";
import LinkOrJustPic from "@/components/header/links/LinkOrJustPic";

const Header = () => {
  return (
    <header className={styles.header}>
      <LinkOrJustPic />
      <LinkToProfile />
    </header>
  );
};

export default Header;

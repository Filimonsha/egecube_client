import styles from "./header.module.css";
import LinkOrJustPic from "@/components/header/links/LinkOrJustPic";
import FadeMenu from "@/components/header/FadeMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <LinkOrJustPic />
      <FadeMenu />
    </header>
  );
};

export default Header;

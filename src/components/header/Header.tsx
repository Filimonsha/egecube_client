import LinkToProfile from "@/components/header/links/LinkToProfile";
import styles from "./header.module.css";
import LinkOrJustPic from "@/components/header/links/LinkOrJustPic";
import SignOutButton from "./links/SignOutButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <LinkOrJustPic />
      <LinkToProfile />
      <SignOutButton />
    </header>
  );
};

export default Header;

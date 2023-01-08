import styles from "./Nav.module.css";

import Logo from "./Logo";
import MenuButton from "./MenuButton";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Logo theme="light" />
      <MenuButton />
    </nav>
  );
}

export default Nav;

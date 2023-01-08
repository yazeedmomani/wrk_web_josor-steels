import styles from "./Nav.module.css";

import { Link } from "react-router-dom";
import Logo from "./Logo";
import MenuButton from "./MenuButton";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo theme="light" />
      </Link>
      <MenuButton />
    </nav>
  );
}

export default Nav;

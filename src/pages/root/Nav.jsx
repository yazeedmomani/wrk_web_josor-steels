import styles from "./Nav.module.css";

import { Link } from "react-router-dom";
import { useState, useContext } from "react";

import Logo from "../../svg/Logo";
import MenuButton from "../../svg/MenuButton";
import NavModal from "../../components/modals/NavModal";
import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function Nav() {
  const [showModal, setShowModal] = useState(false);

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const navContext = contentContext[langContext.lang].nav;

  return (
    <nav className={styles.nav}>
      <Link to={navContext.homeLink}>
        <Logo />
      </Link>
      <ul className={styles["desktop-list"]}>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Projects</Link>
        </li>
        <li>
          <Link>Our facility</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
      {/* <MenuButton onClick={setShowModal.bind(null, true)} /> */}
      {showModal && <NavModal setShowModal={setShowModal} />}
    </nav>
  );
}

export default Nav;

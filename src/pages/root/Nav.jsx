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
      <MenuButton onClick={setShowModal.bind(null, true)} />
      {showModal && <NavModal setShowModal={setShowModal} />}
    </nav>
  );
}

export default Nav;

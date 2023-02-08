import styles from "./Nav.module.css";

import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import Logo from "../../svg/Logo";
import MenuButton from "../../svg/MenuButton";
import NavModal from "../../components/modals/NavModal";
import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [winWidth] = useWindowDimensions();

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const navContext = contentContext[langContext.lang].nav;

  useEffect(() => {
    if (winWidth > 1024) setIsDesktop(true);
    else setIsDesktop(false);
  }, [winWidth]);

  // TODO fix footer responsiviness for arabic

  return (
    <nav className={styles.nav}>
      <Link to={navContext.homeLink}>
        <Logo />
      </Link>
      {isDesktop && (
        <ul className={styles["desktop-list"]}>
          {navContext.desktopLinks.map((cur, i) => (
            <li key={i}>
              <Link to={cur.to}>{cur.text}</Link>
            </li>
          ))}
        </ul>
      )}
      {!isDesktop && <MenuButton onClick={setShowModal.bind(null, true)} />}
      {showModal && <NavModal setShowModal={setShowModal} />}
    </nav>
  );
}

export default Nav;

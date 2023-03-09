import styles from "./nav.module.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import useWindowDimensions from "../../hooks/use-window-dimensions";

import Logo from "../../svg/logo/logo";
import MenuButton from "../../svg/menu-button/menu-button";
import NavModal from "./components/nav-modal";

import useContent from "../../hooks/use-content/";

export default function Nav() {
  const [showModal, setShowModal] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [winWidth] = useWindowDimensions();

  const [content] = useContent();

  const navContext = content.nav;

  useEffect(() => {
    if (winWidth > 1024) setIsDesktop(true);
    else setIsDesktop(false);
  }, [winWidth]);

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

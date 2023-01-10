import styles from "./Nav.module.css";

import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "../../svg/Logo";
import MenuButton from "../../svg/MenuButton";
import NavModal from "../../components/modals/NavModal";

function Nav() {
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo theme="light" />
      </Link>
      <MenuButton onClick={setShowModal.bind(null, true)} />
      {showModal && <NavModal setShowModal={setShowModal} />}
    </nav>
  );
}

export default Nav;

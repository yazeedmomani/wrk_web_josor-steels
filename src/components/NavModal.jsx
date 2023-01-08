import { createPortal } from "react-dom";

import { Link } from "react-router-dom";

import styles from "./NavModal.module.css";

function NavModal() {
  return createPortal(
    <>
      <div className={styles.backdrop}></div>
      <div className={styles['modal-container']}>
        <ul className={styles.modal}>
          <li className={styles.list}>
            <Link>About us</Link>
          </li>
          <li className={styles.list}>
            <Link>Projects</Link>
          </li>
          <li className={styles.list}>
            <Link>Our facility</Link>
          </li>
          <li className={styles.list}>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
    </>,
    document.querySelector("#NavModal")
  );
}

export default NavModal;

import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import CloseBtn from "./CloseBtn";
import Backdrop from "./Backdrop";
import Expand from "react-expand-animated";

import styles from "./NavModal.module.css";

function NavModal() {
  const [showProjects, setShowProjects] = useState(false);

  return createPortal(
    <>
      <Backdrop />
      <div className={styles.content}>
        <div className={styles["btn-container"]}>
          <CloseBtn />
        </div>
        <ul className={styles.modal}>
          <li className={styles.list}>
            <Link>About us</Link>
          </li>
          <li
            className={styles.list}
            onClick={setShowProjects.bind(null, (prev) => !prev)}>
            Projects
            <Expand open={showProjects}>
              <ul>
                <li>
                  <Link>Hungers</Link>
                </li>
                <li>
                  <Link>Bridges</Link>
                </li>
                <li>
                  <Link>Tubes</Link>
                </li>
                <li>
                  <Link>Canopy</Link>
                </li>
                <li>
                  <Link>Other</Link>
                </li>
              </ul>
            </Expand>
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

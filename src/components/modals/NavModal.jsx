import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import CloseBtn from "./CloseBtn";
import Backdrop from "./Backdrop";
import LangChanger from "../LangChanger";
import Expand from "react-expand-animated";

import styles from "./NavModal.module.css";

function NavModal(props) {
  const [showProjects, setShowProjects] = useState(false);

  return createPortal(
    <>
      <Backdrop onClick={props.setShowModal.bind(null, false)} />
      <div className={styles.content}>
        <div
          className={styles["btn-container"]}
          onClick={props.setShowModal.bind(null, false)}>
          <CloseBtn />
        </div>
        <ul className={styles.modal}>
          <li
            className={styles.list}
            onClick={props.setShowModal.bind(null, false)}>
            <Link to="/about-us">About us</Link>
          </li>
          <li
            className={styles.list}
            onClick={setShowProjects.bind(null, (prev) => !prev)}>
            Projects
            <Expand open={showProjects}>
              <ul>
                <li onClick={props.setShowModal.bind(null, false)}>
                  <Link>Hungers</Link>
                </li>
                <li onClick={props.setShowModal.bind(null, false)}>
                  <Link>Bridges</Link>
                </li>
                <li onClick={props.setShowModal.bind(null, false)}>
                  <Link>Tubes</Link>
                </li>
                <li onClick={props.setShowModal.bind(null, false)}>
                  <Link>Canopy</Link>
                </li>
                <li onClick={props.setShowModal.bind(null, false)}>
                  <Link>Other</Link>
                </li>
              </ul>
            </Expand>
          </li>
          <li
            className={styles.list}
            onClick={props.setShowModal.bind(null, false)}>
            <Link>Our facility</Link>
          </li>
          <li
            className={styles.list}
            onClick={props.setShowModal.bind(null, false)}>
            <Link>Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles['lang-changer-container']}>
        <LangChanger />
      </div>
    </>,
    document.querySelector("#NavModal")
  );
}

export default NavModal;

import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import CloseBtn from "../../svg/CloseBtn";
import Backdrop from "./Backdrop";
import LangChanger from "../buttons/LangChanger";
import Expand from "react-expand-animated";

import styles from "./NavModal.module.css";
import useContent from "../../hooks/use-content";

function NavModal(props) {
  const [showProjects, setShowProjects] = useState(false);
  const [content] = useContent();

  const navContext = content.nav.modal;

  function closeModal() {
    props.setShowModal(false);
  }

  function toggleProjects() {
    setShowProjects((prev) => !prev);
  }

  return createPortal(
    <>
      <Backdrop onClick={closeModal} />
      <div className={styles.content}>
        <div
          className={styles["btn-container"]}
          onClick={closeModal}>
          <CloseBtn />
        </div>
        <ul className={styles.modal}>
          {navContext.map((cur, i) => (
            <>
              {cur.isProjects === true ? (
                <li
                  key={i}
                  className={styles.list}
                  onClick={toggleProjects}>
                  {cur.text}
                  <Expand open={showProjects}>
                    <ul>
                      {cur.links.map((cur, i) => (
                        <li
                          key={i}
                          onClick={closeModal}>
                          <Link to={cur.to}>{cur.text}</Link>
                        </li>
                      ))}
                    </ul>
                  </Expand>
                </li>
              ) : (
                <li
                  key={i}
                  className={styles.list}
                  onClick={closeModal}>
                  <Link to={cur.to}>{cur.text}</Link>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
      <div
        className={styles["lang-changer-container"]}
        onClick={closeModal}>
        <LangChanger />
      </div>
    </>,
    document.querySelector("#Modal")
  );
}

export default NavModal;

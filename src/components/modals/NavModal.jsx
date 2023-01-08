import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import CloseBtn from "./CloseBtn";
import Backdrop from "./Backdrop";
import LangChanger from "../LangChanger";
import Expand from "react-expand-animated";

import styles from "./NavModal.module.css";
import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function NavModal(props) {
  const [showProjects, setShowProjects] = useState(false);

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

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
            <Link to="/about-us">
              {contentContext[langContext.lang].nav.aboutUs}
            </Link>
          </li>
          <li
            className={styles.list}
            onClick={setShowProjects.bind(null, (prev) => !prev)}>
            {contentContext[langContext.lang].nav.projects.title}
            <Expand open={showProjects}>
              <ul>
                {contentContext[langContext.lang].nav.projects.cat.map(
                  (cur) => (
                    <li onClick={props.setShowModal.bind(null, false)}>
                      <Link>{cur}</Link>
                    </li>
                  )
                )}
              </ul>
            </Expand>
          </li>
          <li
            className={styles.list}
            onClick={props.setShowModal.bind(null, false)}>
            <Link>{contentContext[langContext.lang].nav.ourFacility}</Link>
          </li>
          <li
            className={styles.list}
            onClick={props.setShowModal.bind(null, false)}>
            <Link to="/contact">
              {contentContext[langContext.lang].nav.contact}
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles["lang-changer-container"]}>
        <LangChanger />
      </div>
    </>,
    document.querySelector("#NavModal")
  );
}

export default NavModal;

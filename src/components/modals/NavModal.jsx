import { useState, useContext } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import CloseBtn from "../../svg/CloseBtn";
import Backdrop from "./Backdrop";
import LangChanger from "../buttons/LangChanger";
import Expand from "react-expand-animated";

import styles from "./NavModal.module.css";
import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function NavModal(props) {
  const [showProjects, setShowProjects] = useState(false);

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const navContext = contentContext[langContext.lang].nav;
  const projectsContext = navContext.projects;

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
          <li
            className={styles.list}
            onClick={closeModal}>
            <Link to="/about-us">{navContext.aboutUs}</Link>
          </li>
          <li
            className={styles.list}
            onClick={toggleProjects}>
            {projectsContext.title}
            <Expand open={showProjects}>
              <ul>
                {projectsContext.cat.map((cur) => (
                  <li onClick={closeModal}>
                    <Link>{cur}</Link>
                  </li>
                ))}
              </ul>
            </Expand>
          </li>
          <li
            className={styles.list}
            onClick={closeModal}>
            <Link>{navContext.ourFacility}</Link>
          </li>
          <li
            className={styles.list}
            onClick={closeModal}>
            <Link to="/contact">{navContext.contact}</Link>
          </li>
        </ul>
      </div>
      <div
        className={styles["lang-changer-container"]}
        onClick={closeModal}>
        <LangChanger />
      </div>
    </>,
    document.querySelector("#NavModal")
  );
}

export default NavModal;

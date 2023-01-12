import { useContext, useState } from "react";
import ContentContext from "../../contexts/content-context";
import LangContext from "../../contexts/lang-context";
import ImageModal from "../modals/ImageModal";

import styles from "./ProjectCard.module.css";

function ProjectCard(props) {
  const [showModal, setShowModal] = useState(false);

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const componentContext =
    contentContext[langContext.lang].components.ProjectCard;

  return (
    <div className={`${styles.container} ${props.styles}`}>
      <img
        src={props.src}
        className={styles.img}
      />
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <h2 className="h3">{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={setShowModal.bind(null, true)}>
          {componentContext.button}
        </button>
      </div>
      {showModal && (
        <ImageModal
          images={props.images}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default ProjectCard;

import { useState } from "react";
import ImageModal from "../../../components/modals/image-modal/image-modal";

import styles from "./project-card.module.css";
import useContent from "../../../hooks/use-content";

function ProjectCard(props) {
  const [showModal, setShowModal] = useState(false);

  const [content] = useContent();

  const componentContext = content.components.ProjectCard;

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
          isMulti={true}
          images={props.images}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
}

export default ProjectCard;

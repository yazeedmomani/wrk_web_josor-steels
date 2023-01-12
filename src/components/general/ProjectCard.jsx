import { useContext } from "react";
import ContentContext from "../../contexts/content-context";
import LangContext from "../../contexts/lang-context";

import styles from "./ProjectCard.module.css";

function ProjectCard(props) {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const componentContext =
    contentContext[langContext.lang].components.ProjectCard;

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <div className={`${styles.container} ${props.styles}`}>
      <img
        src={props.src}
        alt={props.alt}
        className={styles.img}
      />
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <h2 className="h3">{props.title}</h2>
        <p>{props.description}</p>
        <button onClick={handleClick}>{componentContext.button}</button>
      </div>
    </div>
  );
}

export default ProjectCard;

import { useContext } from "react";
import { Link } from "react-router-dom";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import Image from "../../components/general/Image";

import styles from "./Projects.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";
import images from "../../contents/images";

function Projects() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  //TODO add langContext below
  const projectsContext = contentContext["en"].projects.categoryCards;
  const projectImages = images.projectCategories;

  return (
    <>
      <DynamicHelmet page="projects" />
      <div className={styles.center}>
        <h1 className="h2">Projects</h1>
        {projectsContext.map((cur, i) => (
          <Link
            to={cur.to}
            key={i}>
            <Image
              src={projectImages[cur.image]}
              alt={cur.alt}
              title={cur.title}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Projects;

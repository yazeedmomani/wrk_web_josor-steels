import { useContext } from "react";
import { Link } from "react-router-dom";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import Image from "../../components/general/Image";
import PathNav from "../../components/general/PathNav";

import styles from "./Projects.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";
import images from "../../contents/images";

function Projects() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const projectsContext = contentContext[langContext.lang].projects;
  const projectImages = images.projectCategories;
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.projects.categoryPage;

  return (
    <>
      <DynamicHelmet page="projects" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">{projectsContext.title}</h1>
        {projectsContext.categoryCards.map((cur, i) => (
          <Link
            className={styles["category-card"]}
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

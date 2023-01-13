import { useContext } from "react";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import PaginatedItems from "../../components/pagination/PaginatedItems";
import ProjectCard from "../../components/general/ProjectCard";
import PathNav from "../../components/general/PathNav";

import styles from "./ProjectCategory.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";
import images from "../../contents/images";

function ProjectCategory(props) {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const categoryContext =
    contentContext[langContext.lang].projects.categoryPages[props.category];
  const imagesContext = images.projectImages[props.category];
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.projects.projectPage[
      props.category
    ];

  return (
    <>
      <DynamicHelmet page={props.category} />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">{categoryContext.title}</h1>
        <PaginatedItems
          itemsPerPage={3}
          controlsClassName={styles.controls}
          itemClassName={styles.item}>
          {categoryContext.projectCards.map((cur, i) => (
            <ProjectCard
              key={i}
              title={cur.title}
              description={cur.description}
              src={imagesContext[i][0]}
              images={imagesContext[i]}
            />
          ))}
        </PaginatedItems>
      </div>
    </>
  );
}

export default ProjectCategory;

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import Image from "../../components/general/Image";
import PathNav from "../../components/general/PathNav";

import styles from "./Projects.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";
import images from "../../contents/images";
import Slider from "../../components/slider/Slider";

function Projects() {
  const [isDesktop, setIsDesktop] = useState(false);

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const projectsContext = contentContext[langContext.lang].projects;
  const projectImages = images.projectCategories;
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.projects.categoryPage;

  const [winWidth] = useWindowDimensions();

  useEffect(() => {
    if (winWidth > 1024) setIsDesktop(true);
    else setIsDesktop(false);
  }, [winWidth]);

  return (
    <>
      <DynamicHelmet page="projects" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">{projectsContext.title}</h1>
        {!isDesktop && (
          <div className={styles.flex}>
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
        )}
      </div>
      {isDesktop && (
        <Slider
          autoPlay={true}
          containerClass={styles.container}
          dotListClass={styles.dots}>
          {projectsContext.categoryCards.map((cur, i) => (
            <Link
              to={cur.to}
              key={cur.title}>
              <Image
                src={projectImages[cur.image]}
                alt={cur.alt}
                title={cur.title}
              />
            </Link>
          ))}
        </Slider>
      )}
    </>
  );
}

export default Projects;

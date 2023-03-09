import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useWindowDimensions from "../../hooks/use-window-dimensions";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import Image from "../../components/general/Image";
import PathNav from "../../components/general/PathNav";

import styles from "./project-categories.module.css";

import Slider from "../../components/slider/Slider";

import useContent from "../../hooks/use-content/";

export default function ProjectCategories() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [content, images, pathNav] = useContent();

  const projectImages = images.projectCategories;
  const projectsContext = content.projects;
  const pathNavContext = pathNav.projects.categoryPage;

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

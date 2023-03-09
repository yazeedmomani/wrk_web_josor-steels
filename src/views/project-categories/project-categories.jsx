import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useWindowDimensions from "../../hooks/use-window-dimensions";

import DynamicHelmet from "../../components/helmet/dynamic";
import Image from "../../components/general/image/image";
import Breadcrumb from "../../components/general/breadcrumb/breadcrumb";

import styles from "./project-categories.module.css";

import Slider from "../../components/slider/slider/slider";

import useContent from "../../hooks/use-content/";

export default function ProjectCategories() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [content, images, breadcrumb] = useContent();

  const projectImages = images.projectCategories;
  const projectsContext = content.projects;
  const pathNavContext = breadcrumb.projects.categoryPage;

  const [winWidth] = useWindowDimensions();

  useEffect(() => {
    if (winWidth > 1024) setIsDesktop(true);
    else setIsDesktop(false);
  }, [winWidth]);

  return (
    <>
      <DynamicHelmet page="projects" />
      <div className={styles.center}>
        <Breadcrumb
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

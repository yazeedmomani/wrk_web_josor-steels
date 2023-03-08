import { useContext } from "react";
import { Link } from "react-router-dom";

import SectionSpan from "../../../../components/general/SectionSpan";
import Slider from "../../../../components/slider/Slider";
import Image from "../../../../components/general/Image";

import styles from "./services.module.css";

import LangContext from "../../../../contexts/lang-context";
import ContentContext from "../../../../contexts/content-context";
import images from "../../../../contents/images";

export default function Services() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const servicesContext = contentContext[langContext.lang].home.services;
  const projectCatContext = servicesContext.projectCat;
  const projectImages = images.projectCategories;

  return (
    <section
      className={styles.section}
      id="HomeServices">
      <div className={styles.center}>
        <SectionSpan>{servicesContext.span}</SectionSpan>
        <h2 className="h3">{servicesContext.title}</h2>
      </div>

      <Slider
        autoPlay={true}
        containerClass={styles.container}
        dotListClass={styles.dots}>
        {projectCatContext.map((cur, i) => (
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
    </section>
  );
}

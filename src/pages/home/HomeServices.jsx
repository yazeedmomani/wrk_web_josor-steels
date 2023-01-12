import { useContext } from "react";
import { Link } from "react-router-dom";

import SectionSpan from "../../components/general/SectionSpan";
import Slider from "../../components/slider/Slider";
import Image from "../../components/general/Image";

import image01 from "../../images/01.jpeg";
import image02 from "../../images/02.jpeg";
import image03 from "../../images/03.jpeg";
import image04 from "../../images/04.jpeg";

import styles from "./HomeServices.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function HomeServices() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const servicesContext = contentContext[langContext.lang].home.services;
  const projectCatContext = servicesContext.projectCat;
  const projectImages = [image01, image02, image03, image04, image01];

  return (
    <section
      className={styles.section}
      id="HomeServices">
      <div className={styles.center}>
        <SectionSpan>{servicesContext.span}</SectionSpan>
        <h2 className="h3">{servicesContext.title}</h2>
      </div>

      <Slider
        containerClass={styles.container}
        dotListClass={styles.dots}>
        {projectCatContext.map((cur, i) => (
          <Link to={cur.to} key={cur.title}>
            <Image
              src={projectImages[i]}
              alt={cur.alt}
              title={cur.title}
            />
          </Link>
        ))}
      </Slider>
    </section>
  );
}

export default HomeServices;

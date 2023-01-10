import { useContext } from "react";

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

  return (
    <section
      className={styles.section}
      id="HomeServices">
      <div className={styles.center}>
        <SectionSpan>
          {contentContext[langContext.lang].home.services.span}
        </SectionSpan>
        <h2 className="h3">
          {contentContext[langContext.lang].home.services.title}
        </h2>
      </div>

      <Slider
        containerClass={styles.container}
        dotListClass={styles.dots}>
        <Image
          src={image01}
          alt="Hanger"
          title={contentContext[langContext.lang].home.services.projectCat[0]}
        />
        <Image
          src={image02}
          alt="Bridge"
          title={contentContext[langContext.lang].home.services.projectCat[1]}
        />
        <Image
          src={image03}
          alt="Tube"
          title={contentContext[langContext.lang].home.services.projectCat[2]}
        />
        <Image
          src={image04}
          alt="Canopy"
          title={contentContext[langContext.lang].home.services.projectCat[3]}
        />
        <Image
          src={image01}
          alt="Other"
          title={contentContext[langContext.lang].home.services.projectCat[4]}
        />
      </Slider>
    </section>
  );
}

export default HomeServices;

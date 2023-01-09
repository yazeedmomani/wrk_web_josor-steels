import { useContext } from "react";

import SectionSpan from "../../components/SectionSpan";
import Slider from "../../components/Slider";
import Image from "../../components/Image";

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
      <SectionSpan>{contentContext[langContext.lang].home.services.span}</SectionSpan>
      <h2 className="h3">{contentContext[langContext.lang].home.services.title}</h2>
      <Slider>
        <Image img={image01} alt="Hanger">{contentContext[langContext.lang].home.services.projectCat[0]}</Image>
        <Image img={image02} alt="Bridge">{contentContext[langContext.lang].home.services.projectCat[1]}</Image>
        <Image img={image03} alt="Tube">{contentContext[langContext.lang].home.services.projectCat[2]}</Image>
        <Image img={image04} alt="Canopy">{contentContext[langContext.lang].home.services.projectCat[3]}</Image>
        <Image img={image01} alt="Other">{contentContext[langContext.lang].home.services.projectCat[4]}</Image>
      </Slider>
    </section>
  );
}

export default HomeServices;

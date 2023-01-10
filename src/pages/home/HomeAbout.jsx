import { useContext } from "react";

import SectionSpan from "../../components/SectionSpan";
import Image from "../../components/Image";
import PrimaryLink from "../../components/PrimaryLink";

import styles from "./HomeAbout.module.css";

import img from "../../images/03.jpeg";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function HomeAbout() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  return (
    <section className={styles.section}>
      <SectionSpan>
        {contentContext[langContext.lang].home.about.span}
      </SectionSpan>
      <h2 className="h3">
        {contentContext[langContext.lang].home.about.title}
      </h2>
      <p>{contentContext[langContext.lang].home.about.paragraph}</p>
      <Image
        src={img}
        alt="Hanger"
      />
      <PrimaryLink to="/about-us">
        {contentContext[langContext.lang].home.about.link}
      </PrimaryLink>
    </section>
  );
}

export default HomeAbout;

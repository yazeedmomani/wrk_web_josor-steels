import { useContext } from "react";

import SectionSpan from "../../components/general/SectionSpan";
import Image from "../../components/general/Image";
import PrimaryLink from "../../components/buttons/PrimaryLink";

import styles from "./HomeAbout.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";
import images from "../../contents/images";

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
        src={images.home.aboutUs}
        alt="Hanger"
      />
      <PrimaryLink
        to={contentContext[langContext.lang].home.about.link.to}
        styles={styles["primary-link"]}>
        {contentContext[langContext.lang].home.about.link.text}
      </PrimaryLink>
    </section>
  );
}

export default HomeAbout;

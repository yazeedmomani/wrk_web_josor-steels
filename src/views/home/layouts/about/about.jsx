import SectionSpan from "../../../../components/general/SectionSpan";
import Image from "../../../../components/general/Image";
import PrimaryLink from "../../../../components/buttons/PrimaryLink";

import styles from "./about.module.css";
import useContent from "../../../../hooks/use-content/";

export default function About() {
  const [content, images] = useContent();
  const aboutContent = content.home.about;

  return (
    <section className={styles.section}>
      <SectionSpan>{aboutContent.span}</SectionSpan>
      <h2 className="h3">{aboutContent.title}</h2>
      <p>{aboutContent.paragraph}</p>
      <Image
        src={images.home.aboutUs}
        alt="Hanger"
      />
      <PrimaryLink
        to={aboutContent.link.to}
        styles={styles["primary-link"]}>
        {aboutContent.link.text}
      </PrimaryLink>
    </section>
  );
}

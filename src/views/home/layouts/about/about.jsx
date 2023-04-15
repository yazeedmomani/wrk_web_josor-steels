import SectionSpan from "../../section-span/section-span";
import Image from "../../../../components/image/image";
import PrimaryLink from "../../../../components/primary-link/primary-link";

import styles from "./about.module.css";
import useContent from "../../../../hooks/use-content/";

export default function About() {
  const [content, images] = useContent();
  const aboutContent = content.home.about;

  return (
    <section className={styles.section}>
      <SectionSpan>{aboutContent.span}</SectionSpan>
      <h2 className="h3">{aboutContent.title}</h2>
      <p>{aboutContent.firstParagraph}</p>
      <p className={styles.secondParagraph}>{aboutContent.secondParagraph}</p>
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

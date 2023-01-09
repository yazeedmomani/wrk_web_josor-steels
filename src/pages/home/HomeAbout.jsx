import SectionSpan from "../../components/SectionSpan";
import Image from "../../components/Image";

import styles from "./HomeAbout.module.css";

import img from "../../images/03.jpeg";

function HomeAbout() {
  return (
    <section className={styles.section}>
      <SectionSpan>About Company</SectionSpan>
      <h2 className="h3">Our mission</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
      <Image
        src={img}
        alt="Hanger"
      />
    </section>
  );
}

export default HomeAbout;

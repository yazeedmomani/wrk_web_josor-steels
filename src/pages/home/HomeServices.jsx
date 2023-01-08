import SectionSpan from "../../components/SectionSpan";
import Slider from "../../components/Slider";

import styles from "./HomeServices.module.css";

function HomeServices() {
  return (
    <section
      className={styles.section}
      id="HomeServices">
      <SectionSpan>Professional services</SectionSpan>
      <h2 className="h3">We take on a wide variety of projects</h2>
      <Slider>
        <div className={styles.test}></div>
        <div className={styles.test}></div>
        <div className={styles.test}></div>
        <div className={styles.test}></div>
      </Slider>
    </section>
  );
}

export default HomeServices;

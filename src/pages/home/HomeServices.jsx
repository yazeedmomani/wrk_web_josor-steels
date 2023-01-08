import SectionSpan from "../../components/SectionSpan";

import styles from "./HomeServices.module.css";

function HomeServices() {
  return (
    <section className={styles.section} id="HomeServices">
      <SectionSpan>Professional services</SectionSpan>
      <h2 className="h3">We take on a wide variety of projects</h2>
    </section>
  );
}

export default HomeServices;

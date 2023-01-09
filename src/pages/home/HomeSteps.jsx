import SectionSpan from "../../components/SectionSpan";

import styles from "./HomeSteps.module.css";

function HomeSteps() {
  return (
    <section className={styles.section}>
      <SectionSpan>How it works</SectionSpan>
      <h2 className="h3">Construct in 4 simple steps</h2>
    </section>
  );
}

export default HomeSteps;

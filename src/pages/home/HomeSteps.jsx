import SectionSpan from "../../components/SectionSpan";
import Step from "../../components/Step";

import DUMMY01 from "../../svg/DUMMY-01";
import DUMMY02 from "../../svg/DUMMY-02";
import DUMMY03 from "../../svg/DUMMY-03";
import DUMMY04 from "../../svg/DUMMY-04";

import styles from "./HomeSteps.module.css";

function HomeSteps() {
  return (
    <section className={styles.section}>
      <SectionSpan>How it works</SectionSpan>
      <h2 className="h3">Construct in 4 simple steps</h2>
      <Step
        icon={<DUMMY01 />}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        Application
      </Step>
      <Step
        icon={<DUMMY02 />}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        Design
      </Step>
      <Step
        icon={<DUMMY03 />}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        Construction
      </Step>
      <Step
        isLast="true"
        icon={<DUMMY04 />}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        Delivery
      </Step>
    </section>
  );
}

export default HomeSteps;

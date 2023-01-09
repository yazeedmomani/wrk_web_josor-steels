import { useContext } from "react";

import SectionSpan from "../../components/SectionSpan";
import Step from "../../components/Step";

import ContentContext from "../../contexts/content-context";
import LangContext from "../../contexts/lang-context";

import DUMMY01 from "../../svg/DUMMY-01";
import DUMMY02 from "../../svg/DUMMY-02";
import DUMMY03 from "../../svg/DUMMY-03";
import DUMMY04 from "../../svg/DUMMY-04";

import styles from "./HomeSteps.module.css";

function HomeSteps() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  return (
    <section className={styles.section}>
      <SectionSpan>{contentContext[langContext.lang].home.steps.span}</SectionSpan>
      <h2 className="h3">{contentContext[langContext.lang].home.steps.title}</h2>
      <Step
        icon={<DUMMY01 />}
        description={
          contentContext[langContext.lang].home.steps.steps[0].description
        }>
        {contentContext[langContext.lang].home.steps.steps[0].title}
      </Step>
      <Step
        icon={<DUMMY02 />}
        description={
          contentContext[langContext.lang].home.steps.steps[1].description
        }>
        {contentContext[langContext.lang].home.steps.steps[1].title}
      </Step>
      <Step
        icon={<DUMMY03 />}
        description={
          contentContext[langContext.lang].home.steps.steps[2].description
        }>
        {contentContext[langContext.lang].home.steps.steps[2].title}
      </Step>
      <Step
        isLast="true"
        icon={<DUMMY04 />}
        description={
          contentContext[langContext.lang].home.steps.steps[3].description
        }>
        {contentContext[langContext.lang].home.steps.steps[3].title}
      </Step>
    </section>
  );
}

export default HomeSteps;

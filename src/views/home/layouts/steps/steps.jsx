import SectionSpan from "../../../../components/general/SectionSpan";
import Step from "../../../../components/general/Step";

import DUMMY01 from "../../../../svg/DUMMY-01";
import DUMMY02 from "../../../../svg/DUMMY-02";
import DUMMY03 from "../../../../svg/DUMMY-03";
import DUMMY04 from "../../../../svg/DUMMY-04";

import styles from "./steps.module.css";
import useContent from "../../../../hooks/use-content/use-content";

export default function Steps() {
  const [content] = useContent();
  const usedContent = content.home.steps;

  const DUMMIES = [<DUMMY01 />, <DUMMY02 />, <DUMMY03 />, <DUMMY04 />];

  return (
    <section className={styles.section}>
      <SectionSpan>{usedContent.span}</SectionSpan>
      <h2 className="h3">{usedContent.title}</h2>
      {usedContent.steps.map((cur, i) => {
        const isLast = usedContent.steps.length === i + 1 ? true : false;

        return (
          <Step
            isLast={isLast}
            icon={DUMMIES[i]}
            description={cur.description}>
            {cur.title}
          </Step>
        );
      })}
    </section>
  );
}

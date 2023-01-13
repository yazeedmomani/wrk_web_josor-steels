import { useContext } from "react";

import DynamicHelmet from "../helmets/DynamicHelmet";
import PathNav from "../components/general/PathNav";

import styles from "./OurFacility.module.css";

import LangContext from "../contexts/lang-context";
import ContentContext from "../contexts/content-context";

function OurFacility() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.ourFacility;

  return (
    <>
      <DynamicHelmet page="ourFacility" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
      </div>
    </>
  );
}

export default OurFacility;

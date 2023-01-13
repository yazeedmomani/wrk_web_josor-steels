import { useContext } from "react";

import DynamicHelmet from "../helmets/DynamicHelmet";
import PathNav from "../components/general/PathNav";

import styles from "./AboutUs.module.css";

import LangContext from "../contexts/lang-context";
import ContentContext from "../contexts/content-context";

function AboutUs() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.aboutUs;

  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
      </div>
    </>
  );
}

export default AboutUs;

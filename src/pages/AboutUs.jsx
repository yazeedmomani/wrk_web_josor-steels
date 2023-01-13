import { useContext } from "react";

import DynamicHelmet from "../helmets/DynamicHelmet";
import PathNav from "../components/general/PathNav";
import LangContext from "../contexts/lang-context";
import ContentContext from "../contexts/content-context";

function AboutUs() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.projects.projectPage
      .other;

  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <PathNav items={pathNavContext} />
    </>
  );
}

export default AboutUs;

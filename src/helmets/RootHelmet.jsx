import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import ContentContext from "../contexts/content-context";
import LangContext from "../contexts/lang-context";

function RootHelmet() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  return (
    <Helmet
      htmlAttributes={{ lang: langContext.lang, dir: langContext.dir }}
      titleTemplate={contentContext[langContext.lang].helmet.defaultTemplate}
    />
  );
}

export default RootHelmet;

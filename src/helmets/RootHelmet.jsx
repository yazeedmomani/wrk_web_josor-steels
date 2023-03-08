import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import useContent from "../hooks/use-content";
import LangContext from "../contexts/lang/lang";

function RootHelmet() {
  const langContext = useContext(LangContext);
  const [content] = useContent();

  return (
    <Helmet
      htmlAttributes={{ lang: langContext.lang, dir: langContext.dir }}
      titleTemplate={content.helmet.defaultTemplate}
    />
  );
}

export default RootHelmet;

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import LangContext from "../context/lang-context";

function DefaultHelmet() {
  const langContext = useContext(LangContext);

  return (
    <Helmet
      htmlAttributes={{ lang: langContext.lang, dir: langContext.dir }}
      titleTemplate="%s | Josor Steels"
    />
  );
}

export default DefaultHelmet;

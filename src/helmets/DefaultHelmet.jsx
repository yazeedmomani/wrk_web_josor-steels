import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import ArabicContext from "../context/arabic-context";
import EnglishContext from "../context/english-context";
import LangContext from "../context/lang-context";

function DefaultHelmet() {
  const langContext = useContext(LangContext);
  const arabicContext = useContext(ArabicContext);
  const englishContext = useContext(EnglishContext);

  let titleTemplate;
  if (langContext.lang === "en")
    titleTemplate = englishContext.helmet.defaultTemplate;
  if (langContext.lang === "ar")
    titleTemplate = arabicContext.helmet.defaultTemplate;

  return (
    <Helmet
      htmlAttributes={{ lang: langContext.lang, dir: langContext.dir }}
      titleTemplate={titleTemplate}
    />
  );
}

export default DefaultHelmet;

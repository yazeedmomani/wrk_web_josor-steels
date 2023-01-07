import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import ArabicContext from "../context/arabic-context";
import EnglishContext from "../context/english-context";
import LangContext from "../context/lang-context";

function HomeHelmet() {
  const langContext = useContext(LangContext);
  const arabicContext = useContext(ArabicContext);
  const englishContext = useContext(EnglishContext);

  return (
    <Helmet>
      {langContext.lang === "en" && (
        <title>{englishContext.helmet.homeTitle}</title>
      )}
      {langContext.lang === "ar" && (
        <title>{arabicContext.helmet.homeTitle}</title>
      )}
    </Helmet>
  );
}

export default HomeHelmet;

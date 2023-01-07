import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import ArabicContext from "../context/arabic-context";
import LangContext from "../context/lang-context";

function HomeHelmet() {
  const langContext = useContext(LangContext);
  const arabicContext = useContext(ArabicContext);

  return (
    <Helmet>
      {langContext.lang === 'en' && <title>Home</title>}
      {langContext.lang === 'ar' && <title>{arabicContext.helmet.homeTitle}</title>}
    </Helmet>
  );
}

export default HomeHelmet;

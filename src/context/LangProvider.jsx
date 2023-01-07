import LangContext from "./lang-context";
import { useState } from "react";

function LangProvider(props) {
  const [langObj, setLangObj] = useState({ lang: "en", dir: "ltr" });

  const store = {
    availableLang: [
      { lang: "en", dir: "ltr" },
      { lang: "ar", dir: "rtl" },
    ],
    lang: langObj.lang,
    dir: langObj.dir,
    changeLang(newLang) {
      const newLangObj = store.availableLang.find(
        (cur) => cur.lang === newLang
      );

      // Gaurd clause
      if (!newLangObj) return;

      // Gaurd clause
      if (this.lang === newLang) return;

      setLangObj(newLangObj);
    },
  };

  return (
    <LangContext.Provider value={store}>{props.children}</LangContext.Provider>
  );
}

export default LangProvider;

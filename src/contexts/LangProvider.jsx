import LangContext from "./lang-context";
import { useState } from "react";

const availableLang = [
  { lang: "en", dir: "ltr" },
  { lang: "ar", dir: "rtl" },
];

function validateUserLang() {
  const userLang = window.navigator.language.slice(0, 2);
  const langObj = availableLang.find((cur) => cur.lang === userLang);

  if (!langObj) return { lang: "en", dir: "ltr" };

  return langObj;
}

const initialLang = validateUserLang();

function LangProvider(props) {
  const [langObj, setLangObj] = useState(initialLang);

  const store = {
    availableLang: availableLang,
    lang: langObj.lang,
    dir: langObj.dir,
    changeLang(newLang) {
      const newLangObj = availableLang.find((cur) => cur.lang === newLang);

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

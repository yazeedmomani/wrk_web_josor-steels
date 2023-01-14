import LangContext from "./lang-context";
import { useState } from "react";

const availableLang = [
  { lang: "en", dir: "ltr" },
  { lang: "ar", dir: "rtl" },
];

function validateUserLanguages() {
  const userLanguage = window.navigator.languages
    .map((cur) => cur.slice(0, 2))
    .find((cur) => availableLang.find((langObj) => langObj.lang === cur));

  const langObj = availableLang.find((cur) => cur.lang === userLanguage);

  if (!langObj) return { lang: "en", dir: "ltr" };

  return langObj;
}

const initialLang = validateUserLanguages;

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

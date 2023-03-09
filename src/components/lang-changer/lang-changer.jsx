import { useContext } from "react";

import LangContext from "../../contexts/lang";

import styles from "./lang-changer.module.css";

function LangChanger(props) {
  const langContext = useContext(LangContext);

  function handleArabicClick() {
    langContext.changeLang("ar");
  }

  function handleEnglishClick() {
    langContext.changeLang("en");
  }

  return (
    <span className={`${styles["lang-changer"]} ${props.styles}`}>
      <span
        role="button"
        className={`${styles.english} ${
          langContext.lang === "en" && styles.selected
        }`}
        onClick={handleEnglishClick}>
        English
      </span>
      <span
        role="button"
        className={`${styles.arabic} ${
          langContext.lang === "ar" && styles.selected
        }`}
        onClick={handleArabicClick}>
        العربية
      </span>
    </span>
  );
}

export default LangChanger;

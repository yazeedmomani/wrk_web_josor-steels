import { useContext } from "react";

import LangContext from "../contexts/lang-context";

import styles from "./LangChanger.module.css";

function LangChanger() {
  const langContext = useContext(LangContext);

  return (
    <span className={styles["lang-changer"]}>
      <span className={`${styles.english} ${langContext.lang === 'en' && styles.selected}`}>English</span>
      <span className={`${styles.arabic} ${langContext.lang === 'ar' && styles.selected}`}>العربية</span>
    </span>
  );
}

export default LangChanger;

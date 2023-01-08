import { useContext } from "react";
import { useNavigate } from "react-router";

import styles from "./HomeHeader.module.css";

import Button from "../../components/Button";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function HomeHeader() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <h1 className="h2">
        {contentContext[langContext.lang].home.header.title}
      </h1>
      <p>{contentContext[langContext.lang].home.header.subTitle}</p>
      <Button
        type="primary"
        onClick={navigate.bind(null, "/contact")}>
        {contentContext[langContext.lang].home.header.primaryButton}
      </Button>
      <Button
        type="secondary"
        href="#HomeServices">
        {contentContext[langContext.lang].home.header.secondaryButton}
      </Button>
    </header>
  );
}

export default HomeHeader;

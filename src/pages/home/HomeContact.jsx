import { useNavigate } from "react-router";
import { useContext } from "react";

import Button from "../../components/buttons/Button";

import styles from "./HomeContact.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function HomeContact() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();

    navigate("/contact");
  }

  return (
    <section className={styles.section}>
      <h2 className="h3">
        {contentContext[langContext.lang].home.contact.title}
      </h2>
      <Button
        type="primary"
        onClick={handleClick}>
        {contentContext[langContext.lang].home.contact.button}
      </Button>
    </section>
  );
}

export default HomeContact;

import { useContext } from "react";

import ContactIcon from "../../svg/ContactIcon";

import styles from "./ContactInfo.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function ContactInfo(props) {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const componentContext =
    contentContext[langContext.lang].components.ContactInfo;

  return (
    <div className={`${styles.container} ${props.styles}`}>
      <a href={`tel:${componentContext.phone}`}>
        <ContactIcon
          type="phone"
          isDark={true}
          styles={styles["tel-icon"]}
        />
        <span>{componentContext.phone}</span>
      </a>
      <a href={`mailto:${componentContext.email}`}>
        <ContactIcon
          type="email"
          isDark={true}
        />
        <span>{componentContext.email}</span>
      </a>
    </div>
  );
}

export default ContactInfo;

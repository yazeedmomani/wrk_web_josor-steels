import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../../svg/Logo";
import LangChanger from "../../components/buttons/LangChanger";
import ContactIcon from "../../svg/ContactIcon";
import ContactInfo from "../../components/general/ContactInfo";
import ScrollToTop from "../../components/fixes/ScrollToTop";

import styles from "./Footer.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function Footer() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  return (
    <footer className={styles.footer}>
      <ScrollToTop dependency={langContext.lang} />
      <div className={styles.center}>
        <Link to="/">
          <Logo isDark={true} />
        </Link>
        <div className={styles["icons-container"]}>
          <ContactIcon
            key="linkedIn"
            styles={styles.icon}
            type="linkedIn"
            isDark={true}
          />
          <ContactIcon
            key="facebook"
            styles={styles.icon}
            type="facebook"
            isDark={true}
          />
        </div>
        <ContactInfo styles={styles["contact-info"]} />
        <div className={styles.links}>
          {contentContext[langContext.lang].footer.links.map((cur, i) => (
            <div key={i}>
              <h2 className={`${langContext.lang === "ar" ? "h4" : "h5"}`}>
                {cur.title}
              </h2>
              <ul>
                {cur.links.map((cur, i) => (
                  <li key={i}>
                    <Link to={cur.to}>{cur.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <LangChanger styles={styles["lang-changer"]} />
        <p className={styles.copyright}>
          {contentContext[langContext.lang].footer.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;

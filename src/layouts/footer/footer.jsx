import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../../svg/logo/logo";
import LangChanger from "../../components/buttons/lang-changer/lang-changer";
import ContactIcon from "../../svg/contact-icon/contact-icon";
import ContactInfo from "../../components/general/contact-info/contact-info";
import ScrollToTop from "../../helpers/scroll-to-top";

import styles from "./footer.module.css";

import LangContext from "../../contexts/lang";

import useContent from "../../hooks/use-content/";

export default function Footer() {
  const langContext = useContext(LangContext);
  const [content] = useContent();
  const footerContent = content.footer;

  return (
    <footer className={styles.footer}>
      <ScrollToTop dependency={langContext.lang} />
      <div className={styles.center}>
        <div className={styles["second-flex"]}>
          <div>
            <Link to={footerContent.logoLink}>
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
          </div>
          <div className={styles.links}>
            {footerContent.links.map((cur, i) => (
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
        </div>
        <div>
          <LangChanger styles={styles["lang-changer"]} />
          <p className={styles.copyright}>{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

import { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../../svg/Logo";
import LangChanger from "../../components/buttons/LangChanger";
import ContactIcon from "../../svg/ContactIcon";
import ContactInfo from "../../components/general/ContactInfo";

import styles from "./Footer.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";

function Footer() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.center}>
        <Link to="/">
          <Logo isDark={true} />
        </Link>
        <div className={styles["icons-container"]}>
          <ContactIcon
            styles={styles.icon}
            type="linkedIn"
            isDark={true}
          />
          <ContactIcon
            styles={styles.icon}
            type="facebook"
            isDark={true}
          />
        </div>
        <ContactInfo styles={styles["contact-info"]} />
        <div className={styles.links}>
          <div>
            <h2 className="h5">
              {contentContext[langContext.lang].footer.links[0].title}
            </h2>
            <ul>
              <li>
                <Link to="/about-us">
                  {contentContext[langContext.lang].footer.links[0].links[0]}
                </Link>
              </li>
              <li>
                <Link>
                  {contentContext[langContext.lang].footer.links[0].links[1]}
                </Link>
              </li>
              <li>
                <Link>
                  {contentContext[langContext.lang].footer.links[0].links[2]}
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  {contentContext[langContext.lang].footer.links[0].links[3]}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="h5">
              {contentContext[langContext.lang].footer.links[1].title}
            </h2>
            <ul>
              <li>
                <Link>
                  {contentContext[langContext.lang].footer.links[1].links[0]}
                </Link>
              </li>
              <li>
                <Link>
                  {contentContext[langContext.lang].footer.links[1].links[1]}
                </Link>
              </li>
              <li>
                <Link>
                  {contentContext[langContext.lang].footer.links[1].links[2]}
                </Link>
              </li>
              <li>
                <Link>
                  {contentContext[langContext.lang].footer.links[1].links[3]}
                </Link>
              </li>
              <li>
                <Link>
                  {contentContext[langContext.lang].footer.links[1].links[4]}
                </Link>
              </li>
            </ul>
          </div>
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

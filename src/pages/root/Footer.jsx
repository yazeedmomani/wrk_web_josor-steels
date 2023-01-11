import Logo from "../../svg/Logo";
import LangChanger from "../../components/buttons/LangChanger";
import PrimaryLink from "../../components/buttons/PrimaryLink";
import ContactIcon from "../../svg/ContactIcon";
import ContactInfo from "../../components/general/ContactInfo";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.center}>
        <Logo isDark={true} />
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
      </div>
    </footer>
  );
}

export default Footer;

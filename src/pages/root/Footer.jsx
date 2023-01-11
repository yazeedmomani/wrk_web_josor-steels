import Logo from "../../svg/Logo";
import LangChanger from "../../components/buttons/LangChanger";
import PrimaryLink from "../../components/buttons/PrimaryLink";
import ContactIcon from "../../svg/ContactIcon";

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
        <div className={styles["tel-container"]}>
          <a href="tel:+962798697131">
            <ContactIcon
              type="phone"
              isDark={true}
              styles={styles["tel-icon"]}
            />
            <span className={styles["tel-text"]}>+962798697131</span>
          </a>
        </div>
        <div className={styles["mail-container"]}>
          <a href="mailto:yazeed.02.momani@outlook.com">
            <ContactIcon
              type="email"
              isDark={true}
              styles={styles["email-icon"]}
            />
            <span className={styles["email-text"]}>
              yazeed.02.momani@outlook.com
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

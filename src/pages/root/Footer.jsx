import Logo from "../../svg/Logo";
import LangChanger from "../../components/buttons/LangChanger";
import PrimaryLink from "../../components/buttons/PrimaryLink";
import SocialMediaIcon from "../../svg/SocialMediaIcon";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.center}>
        <Logo isDark={true} />
        <div className={styles["icons-container"]}>
          <SocialMediaIcon
            styles={styles.icon}
            type="linkedIn"
            isDark={true}
          />
          <SocialMediaIcon
            styles={styles.icon}
            type="facebook"
            isDark={true}
          />
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;

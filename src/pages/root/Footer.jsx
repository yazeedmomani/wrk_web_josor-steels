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
        <SocialMediaIcon
          type="facebook"
          isDark={true}
        />
        <SocialMediaIcon
          type="linkedIn"
          isDark={true}
        />
      </div>
    </footer>
  );
}

export default Footer;

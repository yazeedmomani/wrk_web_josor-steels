import Logo from "../../svg/Logo";
import LangChanger from "../../components/buttons/LangChanger";
import PrimaryLink from "../../components/buttons/PrimaryLink";
import FacebookIcon from "../../svg/FacebookIcon";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.center}>
        {/* <Logo isDark={true} /> */}
        {/* <FacebookIcon /> */}
      </div>
    </footer>
  );
}

export default Footer;

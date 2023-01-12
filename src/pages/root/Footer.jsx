import { Link } from "react-router-dom";

import Logo from "../../svg/Logo";
import LangChanger from "../../components/buttons/LangChanger";
import PrimaryLink from "../../components/buttons/PrimaryLink";
import ContactIcon from "../../svg/ContactIcon";
import ContactInfo from "../../components/general/ContactInfo";

import styles from "./Footer.module.css";

//TODO fix space under about us section. Make footer space dynamic to large and small
//TODO add hover effect to LangChanger

function Footer() {
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
            <h2 className="h5">Pages</h2>
            <ul>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link>Projects</Link>
              </li>
              <li>
                <Link>Our facility</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="h5">Projects</h2>
            <ul>
              <li>
                <Link>Hangers</Link>
              </li>
              <li>
                <Link>Bridges</Link>
              </li>
              <li>
                <Link>Tubes</Link>
              </li>
              <li>
                <Link>Canopies</Link>
              </li>
              <li>
                <Link>Other</Link>
              </li>
            </ul>
          </div>
        </div>
        <LangChanger styles={styles["lang-changer"]} />
        <p className={styles.copyright}>Josor Steels &copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;

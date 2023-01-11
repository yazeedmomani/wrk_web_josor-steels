import ContactIcon from "../../svg/ContactIcon";

import styles from "./ContactInfo.module.css";

function ContactInfo(props) {
  return (
    <div className={`${styles.container} ${props.styles}`}>
      <a href="tel:+962791621064">
        <ContactIcon
          type="phone"
          isDark={true}
          styles={styles["tel-icon"]}
        />
        <span>+962791621064</span>
      </a>
      <a href="mailto:example@fabricators.com">
        <ContactIcon
          type="email"
          isDark={true}
        />
        <span>example@fabricators.com</span>
      </a>
    </div>
  );
}

export default ContactInfo;

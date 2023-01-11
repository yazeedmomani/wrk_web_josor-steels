import ContactIcon from "../../svg/ContactIcon";

import styles from "./ContactInfo.module.css";

function ContactInfo(props) {
  return (
    <div className={`${styles.container} ${props.styles}`}>
      <a href="tel:+962798697131">
        <ContactIcon
          type="phone"
          isDark={true}
          styles={styles["tel-icon"]}
        />
        <span>+962798697131</span>
      </a>
      <a href="mailto:yazeed.02.momani@outlook.com">
        <ContactIcon
          type="email"
          isDark={true}
        />
        <span>yazeed.02.momani@outlook.com</span>
      </a>
    </div>
  );
}

export default ContactInfo;

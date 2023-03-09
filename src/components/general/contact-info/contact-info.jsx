import ContactIcon from "../../../svg/contact-icon/contact-icon";

import styles from "./contact-info.module.css";

import useContent from "../../../hooks/use-content";

function ContactInfo(props) {
  const [content] = useContent();
  const componentContext = content.components.ContactInfo;

  return (
    <div className={`${styles.container} ${props.styles}`}>
      <a href={`tel:${componentContext.phone}`}>
        <ContactIcon
          type="phone"
          isDark={true}
          styles={styles["tel-icon"]}
        />
        <span>{componentContext.phone}</span>
      </a>
      <a href={`mailto:${componentContext.email}`}>
        <ContactIcon
          type="email"
          isDark={true}
        />
        <span>{componentContext.email}</span>
      </a>
    </div>
  );
}

export default ContactInfo;

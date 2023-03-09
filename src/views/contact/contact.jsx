import DynamicHelmet from "../../components/helmet/dynamic";
import Breadcrumb from "../../components/general/breadcrumb/breadcrumb";
import ContactInfo from "../../components/general/contact-info/contact-info";
import MyMap from "../../components/general/my-map/my-map";
import ContactIcon from "../../svg/ContactIcon";

import styles from "./contact.module.css";
import useContent from "../../hooks/use-content/";

export default function Contact() {
  const [content, _, breadcrumb] = useContent();

  const contactContext = content.contact;
  const pathNavContext = breadcrumb.contact;

  return (
    <>
      <DynamicHelmet page="contact" />
      <div className={styles.center}>
        <Breadcrumb
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">{contactContext.title}</h1>
        <h2 className={`h3 ${styles.info}`}>{contactContext.infoTitle}</h2>
        <ContactInfo />
        <p className={styles.address}>{contactContext.address}</p>
        <a href="https://www.google.com/maps/place/%D8%B4%D8%B1%D9%83%D8%A9+%D8%A7%D9%84%D8%AC%D8%B3%D9%88%D8%B1+%D9%84%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84+%D8%A7%D9%84%D9%85%D8%B9%D8%AF%D9%86%D9%8A%D8%A9%E2%80%AD/@32.1159028,36.1329166,17z/data=!4m12!1m6!3m5!1s0x151b71bd3efcbe3f:0x4e42d0bf491b8a09!2z2LTYsdmD2Kkg2KfZhNis2LPZiNixINmE2YTYo9i52YXYp9mEINin2YTZhdi52K_ZhtmK2Kk!8m2!3d32.1158983!4d36.1351053!3m4!1s0x151b71bd3efcbe3f:0x4e42d0bf491b8a09!8m2!3d32.1158983!4d36.1351053">
          <MyMap isLocked={true} />
        </a>
        <h2 className={`h3 ${styles.follow}`}>{contactContext.followTitle}</h2>
        <div className={styles["icons-container"]}>
          <ContactIcon
            key="linkedIn"
            styles={styles.icon}
            type="linkedIn"
            isDark={false}
            isAnimated={true}
          />
          <ContactIcon
            key="facebook"
            styles={styles.icon}
            type="facebook"
            isDark={false}
            isAnimated={true}
          />
        </div>
      </div>
    </>
  );
}

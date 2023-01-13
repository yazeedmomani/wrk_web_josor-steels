import { useContext } from "react";
import { Link } from "react-router-dom";
import ContentContext from "../contexts/content-context";
import LangContext from "../contexts/lang-context";

import RootHelmet from "../helmets/RootHelmet";
import ContactIcon from "../svg/ContactIcon";

import styles from "./NotFound.module.css";

function NotFound() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const notFoundContext = contentContext[langContext.lang].notFound;

  return (
    <>
      <RootHelmet />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className="h1">{notFoundContext.title}</h1>
          <p className={styles.ops}>{notFoundContext.ops}</p>
          <p className={styles.description}>
            {notFoundContext.description}&nbsp;
            <Link to="/">{notFoundContext.link}</Link>
          </p>
          <div className={styles.container}>
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
      </main>
    </>
  );
}

export default NotFound;

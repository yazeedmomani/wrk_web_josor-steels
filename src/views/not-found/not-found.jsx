import { Link } from "react-router-dom";

import RootHelmet from "../../components/helmet/root";
import useContent from "../../hooks/use-content/";
import ContactIcon from "../../svg/ContactIcon";

import styles from "./not-found.module.css";

export default function NotFound() {
  const [content] = useContent();
  const notFoundContext = content.notFound;

  return (
    <>
      <RootHelmet />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className="h1">{notFoundContext.title}</h1>
          <p className={styles.ops}>{notFoundContext.ops}</p>
          <p className={styles.description}>
            {notFoundContext.description}&nbsp;
            <Link to={notFoundContext.link.to}>
              {notFoundContext.link.text}
            </Link>
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

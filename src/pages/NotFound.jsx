import { Link } from "react-router-dom";

import RootHelmet from "../helmets/RootHelmet";
import ContactIcon from "../svg/ContactIcon";

import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <>
      <RootHelmet />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className="h1">404</h1>
          <p className={styles.ops}>Oops! Nothing was found</p>
          <p className={styles.description}>
            The page you are looking for might have been removed, had its name
            changed, or is temporary unavailable.&nbsp;
            <Link to="/">Return to hompage</Link>
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

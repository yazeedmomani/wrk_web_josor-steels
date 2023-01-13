import PrimaryLink from "../buttons/PrimaryLink";
import Arrow from "../../svg/Arrow";

import styles from "./PathNav.module.css";

function PathNav(props) {
  return (
    <div className={`${styles.container} ${props.styles}`}>
      {props.items &&
        props.items.map((cur, i) =>
          cur.isLink ? (
            <>
              <PrimaryLink
                styles={styles.link}
                to={cur.to}>
                {cur.text}
              </PrimaryLink>
              <Arrow />
            </>
          ) : (
            <span>{cur.text}</span>
          )
        )}
    </div>
  );
}

export default PathNav;

import { useContext } from "react";

import PrimaryLink from "../buttons/PrimaryLink";
import Arrow from "../../svg/Arrow";

import styles from "./PathNav.module.css";
import LangContext from "../../contexts/lang-context";

function PathNav(props) {
  const langContext = useContext(LangContext);

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
              <Arrow isLeft={langContext.dir === "rtl" ? true : false} />
            </>
          ) : (
            <span>{cur.text}</span>
          )
        )}
    </div>
  );
}

export default PathNav;

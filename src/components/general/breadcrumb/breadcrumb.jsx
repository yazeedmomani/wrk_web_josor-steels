import { useContext } from "react";

import PrimaryLink from "../../buttons/primary-link/primary-link";
import Arrow from "../../../svg/Arrow";

import styles from "./breadcrumb.module.css";
import LangContext from "../../../contexts/lang";

function Breadcrumb(props) {
  const langContext = useContext(LangContext);

  return (
    <div className={`${styles.container} ${props.styles}`}>
      <ul className={styles.ul}>
        {props.items &&
          props.items.map((cur, i) =>
            cur.isLink ? (
              <li
                key={i}
                className={styles.li}>
                <PrimaryLink
                  styles={styles.link}
                  to={cur.to}>
                  {cur.text}
                </PrimaryLink>
                <Arrow isLeft={langContext.dir === "rtl" ? true : false} />
              </li>
            ) : (
              <li key={i}>
                <span>{cur.text}</span>
              </li>
            )
          )}
      </ul>
    </div>
  );
}

export default Breadcrumb;

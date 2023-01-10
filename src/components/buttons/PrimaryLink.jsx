import { Link } from "react-router-dom";

import styles from "./PrimaryLink.module.css";

function PrimaryLink(props) {
  return (
    <span className={`${styles.link} ${props.styles}`}>
      <Link to={props.to}>{props.children}</Link>
    </span>
  );
}

export default PrimaryLink;

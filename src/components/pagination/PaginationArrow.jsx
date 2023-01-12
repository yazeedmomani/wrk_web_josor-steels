import Arrow from "../../svg/Arrow";

import styles from "./PaginationArrow.module.css";

function PaginationArrow(props) {
  return (
    <div className={styles["arrow-container"]}>
      <Arrow
        isLeft={props.isLeft}
        iconStyles={styles.icon}
      />
    </div>
  );
}

export default PaginationArrow;

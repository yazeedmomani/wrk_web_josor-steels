import Arrow from "../../../svg/Arrow";

import styles from "./pagination-arrow.module.css";

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

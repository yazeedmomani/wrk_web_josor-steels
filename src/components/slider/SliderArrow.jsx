import Arrow from "../../svg/Arrow";

import styles from "./SliderArrow.module.css";

function SliderArrow(props) {
  return (
    <div
      onClick={props.onClick}
      className={`${styles.container} ${
        props.styles
      }`}
      role="button">
      <Arrow
        isLeft={props.isLeft}
        iconStyles={styles.icon}
      />
    </div>
  );
}

export default SliderArrow;

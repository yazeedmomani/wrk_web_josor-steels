import styles from "./Image.module.css";

function Image(props) {
  return (
    <div className={`${styles.container} ${props.styles}`}>
      <img
        src={props.img}
        alt={props.alt}
        className={styles.img}
      />
      <div className={styles.gradient}></div>
      <span
        className="h3"
        role="heading"
        aria-level="3">
        {props.children}
      </span>
    </div>
  );
}

export default Image;

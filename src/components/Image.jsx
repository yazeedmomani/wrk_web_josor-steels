import styles from "./Image.module.css";

function Image(props) {
  return (
    <div className={`${styles.container} ${props.styles}`}>
      <img
        src={props.src}
        alt={props.alt}
        className={styles.img}
      />
      <div className={styles.gradient}></div>
      {props.title && <span
        className="h3"
        role="heading"
        aria-level="3">
        {props.title}
      </span>}
    </div>
  );
}

export default Image;

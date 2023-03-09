import styles from "./image.module.css";

function Image(props) {
  return (
    <div
      className={`${styles.container} ${props.clickable && styles.clickable} ${
        props.styles
      }`}
      onClick={props.onClick}>
      <img
        src={props.src}
        alt={props.alt}
        className={styles.img}
      />
      <div
        className={styles.gradient}
        data-src={props.src}></div>
      {props.title && (
        <span
          className="h3"
          role="heading"
          aria-level="3">
          {props.title}
        </span>
      )}
    </div>
  );
}

export default Image;

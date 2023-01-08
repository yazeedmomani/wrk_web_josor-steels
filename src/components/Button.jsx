import styles from "./Button.module.css";

function Button(props) {
  const buttonStyles = `${styles.button} ${styles[props.type]}`;

  return (
    <a
      href={props.href ? props.href : ""}
      className={buttonStyles}
      onClick={props.onClick && props.onClick}
      role="button">
      {props.children}
    </a>
  );
}

export default Button;

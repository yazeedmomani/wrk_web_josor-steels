import styles from "./backdrop.module.css";

function Backdrop(props) {
  return (
    <div
      className={styles.backdrop}
      onClick={props.onClick}></div>
  );
}

export default Backdrop;

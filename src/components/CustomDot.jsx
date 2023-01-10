import styles from "./CustomDot.module.css";

function CustomDot({ onMove, index, onClick, active }) {
  return (
    <li
      className={`${styles.dot} ${active && styles.active}`}
      onClick={() => onClick()}></li>
  );
}

export default CustomDot;

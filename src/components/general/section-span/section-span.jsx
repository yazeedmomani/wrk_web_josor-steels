import styles from "./section-span.module.css";

function SectionSpan(props) {
  return <span className={styles.span}>{props.children}</span>;
}

export default SectionSpan;

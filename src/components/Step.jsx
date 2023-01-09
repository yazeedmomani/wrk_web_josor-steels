import styles from "./Step.module.css";

function Step(props) {
  return (
    <div className={`${styles.step} ${props.isLast && styles.last}`}>
      <div className={styles.icon}>
        {props.icon}
        {!props.isLast && (
          <div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <article>
        <h3 className="h3">{props.children}</h3>
        <p>{props.description}</p>
        {!props.isLast && <div></div>}
      </article>
    </div>
  );
}

export default Step;

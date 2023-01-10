import styles from "./CloseBtn.module.css";

function CloseBtn(props) {
  return (
    <svg
      role="button"
      onClick={props.onClick}
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="23.335"
      height="23.335"
      viewBox="0 0 23.335 23.335">
      <g
        id="Group_11"
        data-name="Group 11"
        transform="translate(-329.833 -28.333)">
        <path
          id="Line_4"
          data-name="Line 4"
          d="M25,2H0A2,2,0,0,1-2,0,2,2,0,0,1,0-2H25a2,2,0,0,1,2,2A2,2,0,0,1,25,2Z"
          transform="translate(332.661 48.839) rotate(-45)"
          fill="#fff"
        />
        <path
          id="Line_6"
          data-name="Line 6"
          d="M25,2H0A2,2,0,0,1-2,0,2,2,0,0,1,0-2H25a2,2,0,0,1,2,2A2,2,0,0,1,25,2Z"
          transform="translate(332.661 31.161) rotate(45)"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

export default CloseBtn;

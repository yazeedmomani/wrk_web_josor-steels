import styles from "./MenuButton.module.css";

function MenuButton(props) {
  return (
    <svg
      onClick={props.onClick}
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="20"
      viewBox="0 0 29 20">
      <g
        id="Group_170"
        data-name="Group 170"
        transform="translate(-327 -10)">
        <path
          id="Line_4"
          data-name="Line 4"
          d="M25,2H0A2,2,0,0,1-2,0,2,2,0,0,1,0-2H25a2,2,0,0,1,2,2A2,2,0,0,1,25,2Z"
          transform="translate(329 12)"
          fill="#333"
        />
        <path
          id="Line_5"
          data-name="Line 5"
          d="M25,2H0A2,2,0,0,1-2,0,2,2,0,0,1,0-2H25a2,2,0,0,1,2,2A2,2,0,0,1,25,2Z"
          transform="translate(329 20)"
          fill="#333"
        />
        <path
          id="Line_6"
          data-name="Line 6"
          d="M25,2H0A2,2,0,0,1-2,0,2,2,0,0,1,0-2H25a2,2,0,0,1,2,2A2,2,0,0,1,25,2Z"
          transform="translate(329 28)"
          fill="#333"
        />
      </g>
    </svg>
  );
}

export default MenuButton;

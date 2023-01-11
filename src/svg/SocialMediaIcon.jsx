import styles from "./SocialMediaIcon.module.css";

function SocialMediaIcon(props) {
  const iconStyles = `${styles.icon} ${props.isDark === true && styles.dark} ${
    props.isAnimated === true && styles.animated
  } ${props.styles}`;

  const icons = {
    facebook: (
      <svg
        onClick={props.onClick}
        className={iconStyles}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <title>facebook2</title>
        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
      </svg>
    ),
    linkedIn: (
      <svg
        onClick={props.onClick}
        className={iconStyles}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <title>linkedin</title>
        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
      </svg>
    ),
  };

  return icons[props.type];
}

export default SocialMediaIcon;

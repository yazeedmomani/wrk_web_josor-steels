import useContent from "../../hooks/use-content";
import styles from "./contact-icon.module.css";

function ContactIcon(props) {
  const [content] = useContent();
  const componentContext = content.components.ContactIcon;

  const iconStyles = `${styles.icon} ${props.isDark === true && styles.dark} ${
    props.isAnimated === true && styles.animated
  } ${props.styles}`;

  function handleLink(link) {
    window.open(link, "_self");
  }

  const icons = {
    facebook: (
      <svg
        onClick={handleLink.bind(null, componentContext.facebook)}
        className={iconStyles}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <title>facebook</title>
        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
      </svg>
    ),
    linkedIn: (
      <svg
        onClick={handleLink.bind(null, componentContext.linkedIn)}
        className={iconStyles}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <title>linkedin</title>
        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
      </svg>
    ),
    email: (
      <svg
        onClick={props.onClick}
        className={iconStyles}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <title>e-mail</title>
        <path d="M29 4h-26c-1.65 0-3 1.35-3 3v20c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-20c0-1.65-1.35-3-3-3zM12.461 17.199l-8.461 6.59v-15.676l8.461 9.086zM5.512 8h20.976l-10.488 7.875-10.488-7.875zM12.79 17.553l3.21 3.447 3.21-3.447 6.58 8.447h-19.579l6.58-8.447zM19.539 17.199l8.461-9.086v15.676l-8.461-6.59z"></path>
      </svg>
    ),
    phone: (
      <svg
        onClick={props.onClick}
        className={iconStyles}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32">
        <title>phone</title>
        <path d="M22 20c-2 2-2 4-4 4s-4-2-6-4-4-4-4-6 2-2 4-4-4-8-6-8-6 6-6 6c0 4 4.109 12.109 8 16s12 8 16 8c0 0 6-4 6-6s-6-8-8-6z"></path>
      </svg>
    ),
  };

  return icons[props.type];
}

export default ContactIcon;

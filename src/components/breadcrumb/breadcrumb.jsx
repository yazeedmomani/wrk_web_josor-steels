// Import necessary modules and components
import { useContext, memo } from "react";
import PrimaryLink from "../primary-link";
import Arrow from "../../svg/arrow";
import styles from "./breadcrumb.module.scss";
import LangContext from "../../contexts/lang";

// Define the Breadcrumb component
export default memo(function Breadcrumb({ items, styles: className }) {
  // Access the language context using useContext hook
  const langContext = useContext(LangContext);

  // Determine the arrow direction based on the language direction
  const arrowDirection = langContext.dir === "rtl" ? "left" : "right";

  // Create the container class string by joining the container styles and the passed in className
  const containerClasses = [styles.container, className].join(" ");

  // Render the Breadcrumb component
  return (
    <div className={containerClasses}>
      <ul className={styles.ul}>
        {items &&
          items.map((current, index) =>
            current.isLink ? (
              // Render a link item with a Link component and Arrow component
              <li
                key={index}
                className={styles.li}>
                <PrimaryLink
                  styles={styles.link}
                  to={current.to}>
                  {current.text}
                </PrimaryLink>
                <Arrow isLeft={arrowDirection} />
              </li>
            ) : (
              // Render a non-link item with a span element
              <li key={index}>
                <span>{current.text}</span>
              </li>
            )
          )}
      </ul>
    </div>
  );
});

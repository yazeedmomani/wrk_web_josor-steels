// Import necessary modules and components
import { useContext, memo } from "react";

// Importing PrimaryLink component from ../primary-link
import PrimaryLink from "../primary-link";

// Importing Arrow component from ../../svg/arrow
import Arrow from "../../svg/arrow";

// Importing styles object from the breadcrumb.module.scss file
import styles from "./breadcrumb.module.scss";

// Importing LangContext from the ../../contexts/lang file
import LangContext from "../../contexts/lang";

// Define the Breadcrumb component
export default memo(function Breadcrumb({ items, styles: className }) {
  // Access the language context using useContext hook
  const langContext = useContext(LangContext);

  // Determine the arrow direction based on the language direction
  const arrowDirection = langContext.dir === "rtl" ? true : false;

  // Create the breadcrumb class string by joining the breadcrumb styles and the passed in className
  const breadcrumbClasses = [styles.breadcrumb, className].join(" ");

  // Render the Breadcrumb component
  return (
    <div className={breadcrumbClasses}>
      <ul className={styles.breadcrumb_ul}>
        {items &&
          items.map((current, index) =>
            current.isLink ? (
              // Render a link item with a Link component and Arrow component
              <li
                key={index}
                className={styles.breadcrumb_li}>
                <PrimaryLink
                  styles={styles.breadcrumb_link}
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

/*
This is a React component that renders a breadcrumb navigation bar. It takes in an array of items, 
which can either be links or non-links. If an item is a link, it is rendered as a PrimaryLink component 
with an Arrow component, while a non-link item is rendered as a span element. The component also uses the 
LangContext to determine the direction of the Arrow component. The styles for the breadcrumb are provided 
through the className prop.
*/

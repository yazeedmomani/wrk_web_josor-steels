// Importing the CSS classes for the button
import classes from "./button.module.scss";

// Importing a library for conditionally joining classnames
import cn from "classnames";

// Setting default props for the component
Button.defaultProps = {
  type: "primary",
  href: "",
};

// Declaring the functional component
export default function Button({ type, href, children, className, ...props }) {
  // Conditionally joining classnames based on props
  const buttonClasses = cn(
    classes.button,
    classes[`button___${type}`],
    className
  );

  // Rendering the button with a link
  return (
    <a
      href={href}
      className={buttonClasses}
      role="button"
      {...props}>
      {children}
    </a>
  );
}

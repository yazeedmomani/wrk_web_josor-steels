import classes from "./Button.module.scss";
import cn from "classnames";

Button.defaultProps = {
  type: "primary",
  href: "",
};

export default function Button({ type, href, children, className, ...props }) {
  const buttonClasses = cn(
    classes.button,
    classes[`button___${type}`],
    className
  );

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

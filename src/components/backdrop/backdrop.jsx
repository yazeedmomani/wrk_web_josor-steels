import classes from "./backdrop.module.scss";

export default function Backdrop({ onClick, children, className }) {
  const divClasses = `${classes.backdrop} ${className}`;

  return (
    <div
      className={divClasses}
      onClick={onClick}>
      {children}
    </div>
  );
}

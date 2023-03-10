import { useMemo, memo, forwardRef } from "react";
import classes  from "./backdrop.module.scss";

export default memo(
  forwardRef(function Backdrop({ onClick, children, className }, ref) {
    const divClasses = useMemo(
      () => [classes.backdrop, className].join(" "),
      [className]
    );

    return (
      <div
        ref={ref}
        className={divClasses}
        onClick={onClick}>
        {children}
      </div>
    );
  })
);

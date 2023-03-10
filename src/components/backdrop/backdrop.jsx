// Import necessary modules and components
import { useMemo, memo, forwardRef } from "react";
import classes from "./backdrop.module.scss";

// Destructure the classes object to access the "backdrop" CSS class
const { backdrop } = classes;

// Define the Backdrop component using memoization and forwarding of refs
export default memo(
  forwardRef(function Backdrop({ onClick, children, className }, ref) {
    // Create the container class string by joining the "backdrop" class and the passed-in className
    const divClasses = useMemo(
      () => [backdrop, className].join(" "),
      [className]
    );

    // Render the Backdrop component, which is a clickable div that displays its children
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

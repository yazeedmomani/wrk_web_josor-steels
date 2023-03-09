import { useEffect } from "react";

function ScrollToTop(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.dependency]);

  return null;
}

export default ScrollToTop;

import { createPortal } from "react-dom";

import styles from "./NavModal.module.css";

function NavModal() {
  return createPortal(
    <>
      <div className={styles.backdrop}></div>
    </>,
    document.querySelector("#NavModal")
  );
}

export default NavModal;

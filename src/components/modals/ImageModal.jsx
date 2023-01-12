import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";

import styles from "./ImageModal.module.css";

function ImageModal(props) {
  function closeModal() {
    props.setShowModal(false);
  }

  return createPortal(
    <>
      <Backdrop onClick={closeModal} />
    </>,
    document.querySelector("#Modal")
  );
}

export default ImageModal;

import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";
import Slider from "../slider/Slider";

import styles from "./ImageModal.module.css";

function ImageModal(props) {
  function closeModal() {
    props.setShowModal(false);
  }

  return createPortal(
    <>
      <Backdrop onClick={closeModal} />
      <div className={styles.container}>
        {props.images ? (
          <Slider>
            {props.images.map((cur) => (
              <img src={cur} />
            ))}
          </Slider>
        ) : (
          <p className={styles["no-images"]}>No images found</p>
        )}
      </div>
    </>,
    document.querySelector("#Modal")
  );
}

export default ImageModal;

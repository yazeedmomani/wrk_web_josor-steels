import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";
import Slider from "../slider/Slider";
import CloseBtn from "../../svg/CloseBtn";

import styles from "./ImageModal.module.css";

function ImageModal(props) {
  function closeModal() {
    props.setShowModal(false);
  }

  function handleClick(e) {
    if (e.target.className !== styles.container) return;

    closeModal();
  }

  return createPortal(
    <>
      <Backdrop onClick={closeModal} />
      <div
        className={styles.container}
        onClick={handleClick}>
        <div
          className={styles["btn-container"]}
          onClick={closeModal}>
          <CloseBtn />
        </div>
        {props.images ? (
          <Slider
            containerClass={styles.slider}
            dotListClass={styles.dots}>
            {props.images.map((cur, i) => (
              <div key={i}>
                <img
                  src={cur}
                  key={i}
                />
              </div>
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

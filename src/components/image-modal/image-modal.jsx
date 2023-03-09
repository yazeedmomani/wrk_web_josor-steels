import { createPortal } from "react-dom";

import Backdrop from "../backdrop/backdrop";
import Slider from "../slider/slider/slider";
import CloseBtn from "../../svg/close-btn/close-btn";

import styles from "./image-modal.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 550 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};

function ImageModal(props) {
  const multiImage = props.images ? (
    <Slider
      autoPlay={false}
      responsive={responsive}
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
  );

  const singleImage = props.src && (
    <div>
      <img src={props.src} />
    </div>
  );

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
        {props.isMulti ? multiImage : singleImage}
      </div>
    </>,
    document.querySelector("#Modal")
  );
}

export default ImageModal;

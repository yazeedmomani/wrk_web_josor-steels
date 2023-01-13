import { useState } from "react";

import ImageModal from "../modals/ImageModal";

import styles from "./Image.module.css";

function Image(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className={`${styles.container} ${props.styles}`}
      onClick={props.clickable && setShowModal.bind(null, true)}>
      <img
        src={props.src}
        alt={props.alt}
        className={styles.img}
      />
      <div className={styles.gradient}></div>
      {props.title && (
        <span
          className="h3"
          role="heading"
          aria-level="3">
          {props.title}
        </span>
      )}
      {showModal && (
        <ImageModal
          src={props.src}
          isMulti={false}
        />
      )}
    </div>
  );
}

export default Image;

import { useState } from "react";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import PathNav from "../../components/general/PathNav";
import PaginatedItems from "../../components/pagination/PaginatedItems";
import Image from "../../components/general/Image";
import ImageModal from "../../components/modals/ImageModal";

import styles from "./our-facility.module.css";

import useWindowDimensions from "../../hooks/use-window-dimensions";
import useContent from "../../hooks/use-content";

export default function OurFacility() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState();

  const [content, images, pathNav] = useContent();

  const ourFacilityContext = content.ourFacility;
  const imagesContext = images.ourFacility;
  const pathNavContext = pathNav.ourFacility;

  function handleClick(e) {
    setModalImage(e.target.dataset.src);

    setShowModal(true);
  }

  // Seperating one big image array to several small arrays to render them next to each other in desktop size
  const [width] = useWindowDimensions();

  const newImageContextSize = width >= 1200 ? 2 : 1;

  const newImageContext = imagesContext
    .map((cur, i) => {
      if (i % newImageContextSize) return;
      return imagesContext.slice(i, i + newImageContextSize);
    })
    .filter((cur) => cur !== undefined);

  return (
    <>
      <DynamicHelmet page="ourFacility" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">{ourFacilityContext.title}</h1>
        <PaginatedItems
          itemsPerPage={5}
          controlsClassName={styles.controls}
          itemClassName={styles.item}>
          {newImageContext.map((cur, i) => {
            return (
              <>
                {cur.map((image, imageIndex) => (
                  <Image
                    key={`${i}${imageIndex}`}
                    src={image}
                    clickable={true}
                    onClick={handleClick}
                  />
                ))}
              </>
            );
          })}
        </PaginatedItems>
        {showModal && (
          <ImageModal
            src={modalImage}
            isMulti={false}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </>
  );
}

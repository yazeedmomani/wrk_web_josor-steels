import { useContext, useState } from "react";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import PathNav from "../../components/general/PathNav";
import PaginatedItems from "../../components/pagination/PaginatedItems";
import Image from "../../components/general/Image";
import ImageModal from "../../components/modals/ImageModal";

import styles from "./our-facility.module.css";

import LangContext from "../../contexts/lang-context";
import ContentContext from "../../contexts/content-context";
import images from "../../contents/images";

import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function OurFacility() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState();

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const ourFacilityContext = contentContext[langContext.lang].ourFacility;
  const imagesContext = images.ourFacility;
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.ourFacility;

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

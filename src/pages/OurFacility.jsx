import { useContext, useState } from "react";

import DynamicHelmet from "../helmets/DynamicHelmet";
import PathNav from "../components/general/PathNav";
import PaginatedItems from "../components/pagination/PaginatedItems";
import Image from "../components/general/Image";
import ImageModal from "../components/modals/ImageModal";

import styles from "./OurFacility.module.css";

import LangContext from "../contexts/lang-context";
import ContentContext from "../contexts/content-context";
import images from "../contents/images";

function OurFacility() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState();

  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const imagesContext = images.ourFacility;
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.ourFacility;

  function handleClick(e) {
    setModalImage(e.target.dataset.src);

    setShowModal(true);
  }

  return (
    <>
      <DynamicHelmet page="ourFacility" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">Our facility</h1>
        <PaginatedItems
          itemsPerPage={5}
          controlsClassName={styles.controls}
          itemClassName={styles.item}>
          {imagesContext.map((cur) => (
            <Image
              src={cur}
              clickable={true}
              onClick={handleClick}
            />
          ))}
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

export default OurFacility;

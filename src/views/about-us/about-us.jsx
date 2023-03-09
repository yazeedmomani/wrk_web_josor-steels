import { useState } from "react";

import DynamicHelmet from "../../helmets/DynamicHelmet";
import PathNav from "../../components/general/PathNav";
import Image from "../../components/general/Image";
import Slider from "../../components/slider/Slider";
import ImageModal from "../../components/modals/ImageModal";

import styles from "./about-us.module.css";

import PrimaryLink from "../../components/buttons/PrimaryLink";
import useContent from "../../hooks/use-content/use-content";

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState();

  const [content, images, pathNav] = useContent();

  const aboutUsContext = content.aboutUs;
  const imageContext = images.aboutUs;
  const pathNavContext = pathNav.aboutUs;

  function handleClick(e) {
    setModalImage(e.target.dataset.src);

    setShowModal(true);
  }

  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">{aboutUsContext.title}</h1>
        {aboutUsContext.articles.map((cur, i) => (
          <>
            <h2 className={`h3 ${styles["small-margin"]}`}>{cur.title}</h2>
            <p className={styles["medium-margin"]}>{cur.paragraph}</p>
            <Image
              src={imageContext.articles[i]}
              clickable={true}
              onClick={handleClick}
              styles={styles["large-margin"]}
            />
          </>
        ))}
        <h2 className={`h3 ${styles["medium-margin"]}`}>
          {aboutUsContext.ourFacility}
        </h2>
      </div>
      <Slider
        autoPlay={true}
        containerClass={styles.container}
        dotListClass={styles.dots}>
        {imageContext.ourFacility.map((cur) => (
          <Image
            src={cur}
            clickable={true}
            onClick={handleClick}
          />
        ))}
      </Slider>
      <PrimaryLink
        to={aboutUsContext.link.to}
        styles={styles.link}>
        {aboutUsContext.link.text}
      </PrimaryLink>
      {showModal && (
        <ImageModal
          src={modalImage}
          isMulti={false}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}

import { useState } from "react";

import DynamicHelmet from "../../components/helmet/dynamic";
import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import Image from "../../components/image/image";
import Slider from "../../components/slider/slider/slider";
import ImageModal from "../../components/image-modal/image-modal";

import styles from "./about-us.module.css";

import PrimaryLink from "../../components/primary-link/primary-link";
import useContent from "../../hooks/use-content/";

export default function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState();

  const [content, images, breadcrumb] = useContent();

  const aboutUsContext = content.aboutUs;
  const imageContext = images.aboutUs;
  const pathNavContext = breadcrumb.aboutUs;

  function handleClick(e) {
    setModalImage(e.target.dataset.src);

    setShowModal(true);
  }

  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <div className={styles.center}>
        <Breadcrumb
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">{aboutUsContext.title}</h1>
        {aboutUsContext.articles.map((cur, i) => (
          <>
            <h2 className={`h3 ${styles["small-margin"]}`}>{cur.title}</h2>
            <p className={styles["small-margin"]}>{cur.firstParagraph}</p>
            <p className={styles["medium-margin"]}>{cur.secondParagraph}</p>
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

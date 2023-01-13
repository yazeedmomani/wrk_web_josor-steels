import { useContext } from "react";

import DynamicHelmet from "../helmets/DynamicHelmet";
import PathNav from "../components/general/PathNav";
import Image from "../components/general/Image";
import Slider from "../components/slider/Slider";

import styles from "./AboutUs.module.css";

import LangContext from "../contexts/lang-context";
import ContentContext from "../contexts/content-context";
import images from "../contents/images";
import PrimaryLink from "../components/buttons/PrimaryLink";

function AboutUs() {
  const langContext = useContext(LangContext);
  const contentContext = useContext(ContentContext);
  const imageContext = images.aboutUs;
  const pathNavContext =
    contentContext[langContext.lang].components.PathNav.aboutUs;

  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <div className={styles.center}>
        <PathNav
          items={pathNavContext}
          styles={styles.path}
        />
        <h1 className="h2">About us</h1>
        <h2 className={`h3 ${styles["small-margin"]}`}>Who we are</h2>
        <p className={styles["medium-margin"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <Image
          src={imageContext.whoWeAre}
          clickable={false}
          styles={styles["large-margin"]}
        />
        <h2 className={`h3 ${styles["small-margin"]}`}>Our mission</h2>
        <p className={styles["medium-margin"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <Image
          src={imageContext.ourMission}
          clickable={false}
          styles={styles["large-margin"]}
        />
        <h2 className={`h3 ${styles["medium-margin"]}`}>Our facility</h2>
      </div>
      <Slider
        autoPlay={true}
        containerClass={styles.container}
        dotListClass={styles.dots}>
        {imageContext.ourFacility.map((cur) => (
          <Image
            src={cur}
            clickable={false}
          />
        ))}
      </Slider>
      <PrimaryLink
        to="/our-facility"
        styles={styles.link}>
        More images &rarr;
      </PrimaryLink>
    </>
  );
}

export default AboutUs;

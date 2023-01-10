import Carousel from "react-multi-carousel";
import CustomDot from "./CustomDot";
import SliderArrow from "./SliderArrow";

import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";

import LangContext from "../contexts/lang-context";

import styles from "./Slider.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CustomRightArrow({ onClick }) {
  return (
    <SliderArrow
      onClick={onClick}
      styles={styles.right}
    />
  );
}

function CustomLeftArrow({ onClick }) {
  return (
    <SliderArrow
      styles={styles.left}
      onClick={onClick}
      isLeft={true}
    />
  );
}

function Slider(props) {
  const langContext = useContext(LangContext);

  return (
    <Carousel
      autoPlay={true}
      rewind={true}
      rewindWithAnimation={true}
      containerClass={props.containerClass}
      showDots={true}
      customDot={<CustomDot />}
      dotListClass={props.dotListClass}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
      responsive={responsive}
      rtl={langContext.dir === "rtl" && true}
      keyBoardControl="true">
      {props.children}
    </Carousel>
  );
}

export default Slider;

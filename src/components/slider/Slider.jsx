import Carousel from "react-multi-carousel";
import CustomDot from "./CustomDot";
import SliderArrow from "./SliderArrow";

import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";

import LangContext from "../../contexts/lang";

import styles from "./Slider.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 550 },
    items: 1.5,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
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

  const autoPlay =
    props.autoPlay === false || props.autoPlay === true ? props.autoPlay : true;

  return (
    <Carousel
      autoPlay={autoPlay}
      containerClass={`${styles.container} ${props.containerClass}`}
      showDots={true}
      infinite={true}
      customDot={<CustomDot />}
      dotListClass={props.dotListClass}
      // NOTE Bug fix: Arrows switch when direction changes for some reason
      customRightArrow={
        langContext.dir === "rtl" ? <CustomLeftArrow /> : <CustomRightArrow />
      }
      customLeftArrow={
        langContext.dir === "rtl" ? <CustomRightArrow /> : <CustomLeftArrow />
      }
      removeArrowOnDeviceType={["tablet", "mobile"]}
      responsive={props.responsive || responsive}
      rtl={langContext.dir === "rtl" && true}
      keyBoardControl="true">
      {props.children}
    </Carousel>
  );
}

export default Slider;

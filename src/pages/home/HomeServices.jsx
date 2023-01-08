import SectionSpan from "../../components/SectionSpan";
import Slider from "../../components/Slider";
import ProjectCat from "../../components/ProjectCat";

import image01 from "../../images/01.jpeg";
import image02 from "../../images/02.jpeg";
import image03 from "../../images/03.jpeg";
import image04 from "../../images/04.jpeg";

import styles from "./HomeServices.module.css";

function HomeServices() {
  return (
    <section
      className={styles.section}
      id="HomeServices">
      <SectionSpan>Professional services</SectionSpan>
      <h2 className="h3">We take on a wide variety of projects</h2>
      <Slider>
        <ProjectCat img={image01}>Hangers</ProjectCat>
        <ProjectCat img={image02}>Bridges</ProjectCat>
        <ProjectCat img={image03}>Tubes</ProjectCat>
        <ProjectCat img={image04}>Canopies</ProjectCat>
        <ProjectCat img={image01}>Other</ProjectCat>
      </Slider>
    </section>
  );
}

export default HomeServices;

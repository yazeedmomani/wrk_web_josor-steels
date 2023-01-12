import DynamicHelmet from "../helmets/DynamicHelmet";
import ProjectCard from "../components/general/ProjectCard";

import images from "../contents/images";

function AboutUs() {
  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <ProjectCard
        src={images.projectCategories.bridges}
        alt="Hanger"
        title="Project 01"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </>
  );
}

export default AboutUs;

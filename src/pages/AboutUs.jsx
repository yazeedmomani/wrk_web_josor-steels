import DynamicHelmet from "../helmets/DynamicHelmet";
import ProjectCard from "../components/general/ProjectCard";

import images from "../contents/images";

function AboutUs() {
  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <ProjectCard
        src={images.projectCategories.bridges}
        title="Project 01"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        images={images.projectImages.hangers[0]}
      />
    </>
  );
}

export default AboutUs;

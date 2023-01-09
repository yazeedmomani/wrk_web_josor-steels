import DynamicHelmet from "../../helmets/DynamicHelmet";
import HomeHeader from "./HomeHeader";
import HomeServices from "./HomeServices";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";

function Home() {
  return (
    <>
      <DynamicHelmet page="home" />
      <HomeHeader />
      <HomeServices />
      <HomeSteps />
      <HomeAbout />
    </>
  );
}

export default Home;

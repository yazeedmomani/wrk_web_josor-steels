import DynamicHelmet from "../../helmets/DynamicHelmet";
import HomeHeader from "./HomeHeader";
import HomeServices from "./HomeServices";
import HomeSteps from "./HomeSteps";
import HomeAbout from "./HomeAbout";
import HomeContact from "./HomeContact";

function Home() {
  return (
    <>
      <DynamicHelmet page="home" />
      <HomeHeader />
      <HomeServices />
      <HomeSteps />
      <HomeAbout />
      <HomeContact />
    </>
  );
}

export default Home;

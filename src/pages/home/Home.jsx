import DynamicHelmet from "../../helmets/DynamicHelmet";
import HomeHeader from "./HomeHeader";
import HomeServices from "./HomeServices";
import HomeSteps from "./HomeSteps";

function Home() {
  return (
    <>
      <DynamicHelmet page="home" />
      <HomeHeader />
      <HomeServices />
      <HomeSteps />
    </>
  );
}

export default Home;

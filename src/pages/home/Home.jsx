import DynamicHelmet from "../../helmets/DynamicHelmet";
import HomeHeader from "./HomeHeader";
import HomeServices from "./HomeServices";

function Home() {
  return (
    <>
      <DynamicHelmet page="home" />
      <HomeHeader />
      <HomeServices />
    </>
  );
}

export default Home;

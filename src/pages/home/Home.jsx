import DynamicHelmet from "../../helmets/DynamicHelmet";
import HomeHeader from "./HomeHeader";

function Home() {
  return (
    <>
      <DynamicHelmet page="home" />
      <HomeHeader />
    </>
  );
}

export default Home;

import DynamicHelmet from "../../helmets/DynamicHelmet";
import Nav from "../../components/Nav";

function Home() {
  return (
    <>
      <DynamicHelmet page="home" />
      <Nav />
    </>
  );
}

export default Home;

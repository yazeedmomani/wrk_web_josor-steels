import DynamicHelmet from "../../helmets/DynamicHelmet";
import Header from "./layouts/header";
import Services from "./layouts/services";
import Steps from "./layouts/steps";
import About from "./layouts/about";
import Contact from "./layouts/contact";

function Home() {
  return (
    <>
      <DynamicHelmet page="home" />
      <Header />
      <Services />
      <Steps />
      <About />
      <Contact />
    </>
  );
}

export default Home;

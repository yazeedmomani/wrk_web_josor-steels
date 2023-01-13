import DynamicHelmet from "../helmets/DynamicHelmet";
import PathNav from "../components/general/PathNav";

function AboutUs() {
  const pathNav = [
    {
      isLink: true,
      text: "Home",
      to: "/",
    },
    {
      isLink: false,
      text: "About",
    },
  ];

  return (
    <>
      <DynamicHelmet page="aboutUs" />
      <PathNav items={pathNav} />
    </>
  );
}

export default AboutUs;

import { Helmet } from "react-helmet-async";

import HomeHelmet from "../helmets/HomeHelmet";

function Home() {
  return (
    <>
      <HomeHelmet />
      <h1>Home</h1>
    </>
  );
}

export default Home;

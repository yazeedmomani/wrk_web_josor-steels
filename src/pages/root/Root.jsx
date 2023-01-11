import { Outlet } from "react-router-dom";

import RootHelmet from "../../helmets/RootHelmet";
import Nav from "./Nav";
import Footer from "./Footer";

function Root() {
  return (
    <>
      <RootHelmet />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;

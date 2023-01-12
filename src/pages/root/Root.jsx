import { Outlet } from "react-router-dom";

import RootHelmet from "../../helmets/RootHelmet";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollToTop from "../../components/fixes/ScrollToTop";

function Root() {
  return (
    <>
      <ScrollToTop />
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

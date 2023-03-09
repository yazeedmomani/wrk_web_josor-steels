import { Outlet, useLocation } from "react-router-dom";

import RootHelmet from "../../components/helmet/root";
import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import ScrollToTop from "../../helpers/scroll-to-top";

function Root() {
  const { pathname } = useLocation();

  return (
    <>
      <RootHelmet />
      <ScrollToTop dependency={pathname} />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Root;

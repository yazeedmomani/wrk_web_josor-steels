import { Outlet } from "react-router-dom";

import RootHelmet from "../helmets/RootHelmet";
import Nav from "../components/Nav";

function Root() {
  return (
    <>
      <RootHelmet />
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;

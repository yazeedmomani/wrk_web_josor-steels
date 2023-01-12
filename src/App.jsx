import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/root/Root";
import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/projects/Projects";
import ProjectCategory from "./pages/projects/ProjectCategory";
import OurFacility from "./pages/OurFacility";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<h1>Error</h1>}
      element={<Root />}>
      <Route
        index
        element={<Home />}
      />
      <Route
        path="/about-us"
        element={
          <>
            <AboutUs />
          </>
        }
      />
      <Route
        path="/projects"
        element={
          <>
            <Projects />
          </>
        }
      />
      <Route
        path="/projects/hangers"
        element={
          <>
            <ProjectCategory />
          </>
        }
      />
      <Route
        path="/projects/bridges"
        element={
          <>
            <ProjectCategory />
          </>
        }
      />
      <Route
        path="/projects/tubes"
        element={
          <>
            <ProjectCategory />
          </>
        }
      />
      <Route
        path="/projects/canopies"
        element={
          <>
            <ProjectCategory />
          </>
        }
      />
      <Route
        path="/projects/other"
        element={
          <>
            <ProjectCategory />
          </>
        }
      />
      <Route
        path="/our-facility"
        element={
          <>
            <OurFacility />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Contact />
          </>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

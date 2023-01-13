import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/root/Root";
import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/projects/Projects";
import ProjectCategory from "./pages/projects/ProjectCategory";
import OurFacility from "./pages/OurFacility";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<NotFound />}
      element={<Root />}>
      {/* ///////////////////////////////////// */}
      {/* Home */}
      {/* ///////////////////////////////////// */}
      <Route
        index
        element={<Home />}
      />
      {/* ///////////////////////////////////// */}
      {/* About us */}
      {/* ///////////////////////////////////// */}
      <Route
        path="/about-us"
        element={
          <>
            <AboutUs />
          </>
        }
      />
      {/* ///////////////////////////////////// */}
      {/* Projects */}
      {/* ///////////////////////////////////// */}
      <Route
        path="/projects"
        element={
          <>
            <Outlet />
          </>
        }>
        <Route
          index
          element={
            <>
              <Projects />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Hangers */}
        {/* ///////////////////////////////////// */}
        <Route
          path="/projects/hangers"
          element={
            <>
              <ProjectCategory category="hangers" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Bridges */}
        {/* ///////////////////////////////////// */}
        <Route
          path="/projects/bridges"
          element={
            <>
              <ProjectCategory category="bridges" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Tubes */}
        {/* ///////////////////////////////////// */}
        <Route
          path="/projects/tubes"
          element={
            <>
              <ProjectCategory category="tubes" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Canopies */}
        {/* ///////////////////////////////////// */}
        <Route
          path="/projects/canopies"
          element={
            <>
              <ProjectCategory category="canopies" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Other */}
        {/* ///////////////////////////////////// */}
        <Route
          path="/projects/other"
          element={
            <>
              <ProjectCategory category="other" />
            </>
          }
        />
      </Route>
      {/* ///////////////////////////////////// */}
      {/* Our facility */}
      {/* ///////////////////////////////////// */}
      <Route
        path="/our-facility"
        element={
          <>
            <OurFacility />
          </>
        }
      />
      {/* ///////////////////////////////////// */}
      {/* Contact */}
      {/* ///////////////////////////////////// */}
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

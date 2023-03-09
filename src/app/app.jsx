import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/root";
import Home from "../views/home";
import AboutUs from "../views/about-us";
import ProjectCategories from "../views/project-categories";
import Projects from "../views/projects";
import OurFacility from "../views/our-facility";
import Contact from "../views/contact";
import NotFound from "../views/not-found";

import { PATHS } from "../constants";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={PATHS.HOME}
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
        path={PATHS.ABOUTUS}
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
        path={PATHS.PROJECTS.PATH}
        element={
          <>
            <Outlet />
          </>
        }>
        <Route
          index
          element={
            <>
              <ProjectCategories />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Hangers */}
        {/* ///////////////////////////////////// */}
        <Route
          path={PATHS.PROJECTS.CHILDREN.HANGERS}
          element={
            <>
              <Projects category="hangers" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Bridges */}
        {/* ///////////////////////////////////// */}
        <Route
          path={PATHS.PROJECTS.CHILDREN.BRIDGES}
          element={
            <>
              <Projects category="bridges" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Tubes */}
        {/* ///////////////////////////////////// */}
        <Route
          path={PATHS.PROJECTS.CHILDREN.TUBES}
          element={
            <>
              <Projects category="tubes" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Canopies */}
        {/* ///////////////////////////////////// */}
        <Route
          path={PATHS.PROJECTS.CHILDREN.CANOPIES}
          element={
            <>
              <Projects category="canopies" />
            </>
          }
        />
        {/* ///////////////////////////////////// */}
        {/* Other */}
        {/* ///////////////////////////////////// */}
        <Route
          path={PATHS.PROJECTS.CHILDREN.OTHER}
          element={
            <>
              <Projects category="other" />
            </>
          }
        />
      </Route>
      {/* ///////////////////////////////////// */}
      {/* Our facility */}
      {/* ///////////////////////////////////// */}
      <Route
        path={PATHS.OURFACILITY}
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
        path={PATHS.CONTACT}
        element={
          <>
            <Contact />
          </>
        }
      />
      {/* ///////////////////////////////////// */}
      {/* 404 */}
      {/* ///////////////////////////////////// */}
      <Route
        path="*"
        element={
          <>
            <NotFound />
          </>
        }
      />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}

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

import path from "../contents/link-paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={path.home}
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
        path={path.aboutUs}
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
        path={path.projects.path}
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
          path={path.projects.children.hangers}
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
          path={path.projects.children.bridges}
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
          path={path.projects.children.tubes}
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
          path={path.projects.children.canopies}
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
          path={path.projects.children.other}
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
        path={path.ourFacility}
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
        path={path.contact}
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

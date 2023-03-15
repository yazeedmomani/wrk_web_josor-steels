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

const ROUTES = [
  { path: undefined, index: true, element: <Home />, children: undefined },
  {
    path: PATHS.ABOUT_US,
    index: undefined,
    element: <AboutUs />,
    children: undefined,
  },
  {
    path: PATHS.PROJECT_CATEGORIES,
    index: undefined,
    element: <Outlet />,
    children: [
      { path: undefined, index: true, element: <ProjectCategories /> },
      {
        path: PATHS.PROJECTS.HANGERS,
        index: undefined,
        element: <Projects category="hangers" />,
      },
      {
        path: PATHS.PROJECTS.BRIDGES,
        index: undefined,
        element: <Projects category="bridges" />,
      },
      {
        path: PATHS.PROJECTS.TUBES,
        index: undefined,
        element: <Projects category="tubes" />,
      },
      {
        path: PATHS.PROJECTS.CANOPIES,
        index: undefined,
        element: <Projects category="canopies" />,
      },
      {
        path: PATHS.PROJECTS.OTHER,
        index: undefined,
        element: <Projects category="other" />,
      },
    ],
  },

  {
    path: PATHS.OUR_FACILITY,
    index: undefined,
    element: <OurFacility />,
    children: undefined,
  },
  {
    path: PATHS.CONTACT,
    index: undefined,
    element: <Contact />,
    children: undefined,
  },
  { path: "*", index: true, element: <NotFound />, children: undefined },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={PATHS.HOME}
      errorElement={<NotFound />}
      element={<Root />}>
      {ROUTES.map((route) => (
        <Route
          path={route.path}
          index={route.index}
          element={route.element}>
          {route.children?.map((childRoute) => (
            <Route
              path={childRoute.path}
              index={childRoute.index}
              element={childRoute.element}
            />
          ))}
        </Route>
      ))}
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}

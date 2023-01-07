import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<h1>Error</h1>}
      element={
        <>
          <Helmet>
            <meta
              name="description"
              content="Helmet application"
            />
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <Outlet />
        </>
      }>
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
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

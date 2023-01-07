import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./Home";
import AboutUs from "./AboutUs";

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

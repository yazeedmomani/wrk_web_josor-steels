import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import DefaultHelmet from "./helmets/DefaultHelmet";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<h1>Error</h1>}
      element={
        <>
          <DefaultHelmet />
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

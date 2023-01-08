import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/home/Home";
import AboutUs from "./pages/AboutUs";
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

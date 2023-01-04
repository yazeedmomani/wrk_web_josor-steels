import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      errorElement={<h1>Error</h1>}
      element={
        <>
          <h1>Root</h1>
          <Outlet />
        </>
      }>
      <Route
        index
        element={<h1>Home</h1>}
      />
      <Route
        path="/test"
        element={
          <>
            <h1>Test</h1>
            <Outlet />
          </>
        }>
        <Route
          path="/test/sec"
          element={<h1>Test 2</h1>}
        />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

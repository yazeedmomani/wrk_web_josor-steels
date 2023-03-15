// Import required modules and components
import Nav from "../../layouts/nav";
import Footer from "../../layouts/footer";
import { Outlet, useLocation } from "react-router-dom";
import { memo, useCallback } from "react";
import RootHelmet from "../../components/helmet/root";
import ScrollToTop from "../../helpers/scroll-to-top";

// Define a functional component for the basic layout of the website
function Layout({ children }) {
  return (
    <>
      {/* Render navigation bar */}
      <Nav />
      {/* Render main content area */}
      <main>{children}</main>
      {/* Render footer */}
      <Footer />
    </>
  );
}

// Create a memoized version of the Layout component
const MemoizedLayout = memo(Layout);

// Define the Root component, which is the main entry point for the website
export default function Root() {
  const { pathname } = useLocation(); // Get current pathname using the useLocation hook
  const memoizedPathname = useCallback(() => pathname, [pathname]); // Create memoized function to return pathname

  return (
    <>
      {/* Render RootHelmet component to set document title and meta tags*/}
      <RootHelmet />
      {/* Render ScrollToTop component to scroll to top on pathname change */}
      <ScrollToTop dependency={memoizedPathname} />
      {/* Render MemoizedLayout component, which includes navigation, main content, and footer*/}
      <MemoizedLayout>
        {/* Render child component corresponding to the current route */}
        <Outlet />
      </MemoizedLayout>
    </>
  );
}

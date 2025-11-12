import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly whenever the route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // use "auto" for instant scroll
    });
  }, [pathname]);

  return null; // this component doesn’t render anything visible
};

export default ScrollToTop;

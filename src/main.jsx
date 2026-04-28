import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import GoogleFonts from "./components/GoogleFonts";
import KingsleyPortfolio from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import PortfolioPage from "./pages/portfolio.jsx";
import ServicePage from "./pages/service.jsx";
import "./index.css";

function AppRouter() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (path !== window.location.pathname) {
      window.history.pushState({}, "", path);
      setPathname(path);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  return (
    <React.StrictMode>
      <GoogleFonts />
      {normalizedPath === "/about" ? (
        <AboutPage navigateTo={navigateTo} />
      ) : normalizedPath === "/portfolio" ? (
        <PortfolioPage navigateTo={navigateTo} />
      ) : normalizedPath === "/services" ? (
        <ServicePage navigateTo={navigateTo} />
      ) : (
        <KingsleyPortfolio navigateTo={navigateTo} />
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppRouter />);

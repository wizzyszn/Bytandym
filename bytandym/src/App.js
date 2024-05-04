import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Solutions from "./pages/Solutions";
import HowItWorks from "./pages/HowItWorks";
import Brands from "./pages/Brands";
import { useEffect, useState } from "react";
import DesktopMode from "./components/DesktopMode";
import Shoppers from "./pages/Shoppers";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkIfMobile() {
      setIsMobile(window.innerWidth < 1024); // Adjust the value according to your needs
    }
    // Check on component mount
    checkIfMobile();

    const handleResize = () => {
      checkIfMobile();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <DesktopMode />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/shoppers" element={<Shoppers />} />

            {/* Catch-all route for unmatched URLs */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </BrowserRouter>
      )}
    </div>
  );
}

export default App;

// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Animations from "./pages/Animations";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";

function App() {
  const location = useLocation();
  const [centreData, setCentreData] = useState(null);

  useEffect(() => {
    setCentreData(data.centre_information);
  }, []);

  if (!centreData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home data={centreData} />} />
        <Route
          path="/animations"
          element={<Animations data={centreData.animations} />}
        />
        <Route
          path="/services"
          element={<Services data={centreData.services} />}
        />
        <Route
          path="/contact"
          element={<Contact data={centreData.contact} />}
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

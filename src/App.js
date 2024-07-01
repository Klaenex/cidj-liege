import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Animations from "./pages/Animations";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json"; // Importer les données JSON

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home data={data.Home} />} />
        <Route
          path="/animations"
          element={<Animations data={data.Animations} />}
        />
        <Route path="/services" element={<Services data={data.Services} />} />
        <Route path="/contact" element={<Contact data={data.Contact} />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

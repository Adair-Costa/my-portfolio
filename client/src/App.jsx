import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolios from "./pages/Portfolios";
import Contacts from "./pages/Contacts";

export default function App() {
  function handleScroll(section) {
    console.log(section.current);
    window.scrollTo({ top: section.current.offsetTop, behavior: "smooth" });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home handleScroll={handleScroll} />} />
        <Route path="/about" element={<About handleScroll={handleScroll} />} />
        <Route
          path="/portfolios"
          element={<Portfolios handleScroll={handleScroll} />}
        />
        <Route
          path="/contacts"
          element={<Contacts handleScroll={handleScroll} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

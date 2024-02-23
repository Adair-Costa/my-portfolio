// LIBRARY
import { BrowserRouter, Routes, Route } from "react-router-dom";

// STYLES
import "../src/index.css";

// PAGES
import Home from "../src/Pages/Home";
import About from "../src/Pages/About";
import Works from '../src/Pages/Works'
import Contact from "../src/Pages/Contact";
import PageNotFound from "../src/Pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

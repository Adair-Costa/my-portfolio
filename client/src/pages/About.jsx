import { useRef } from "react";

// COMPONENTS
import AboutMe from "../components/AboutMe";
import Contacts from "../components/ContactsComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarWithBreakpoint from "../components/NavbarWithBreakpoint";
import Portfolios from "../components/PortfoliosComponent";
import Projects from "../components/Projects";

function About({ handleScroll }) {
    const sectionAbout = useRef();

    return (
        <div className="bg-base font-sans text-neutral">
            <Navbar />
            <NavbarWithBreakpoint />
            <AboutMe />
            <Projects />
            <Portfolios />
            <Contacts />
            <Footer handleScroll={handleScroll} sectionAbout={sectionAbout} />
        </div>
    );
}

export default About;

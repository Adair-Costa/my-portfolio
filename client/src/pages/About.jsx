import { useRef } from "react";

// COMPONENTS
import AboutMe from "../components/AboutMe";
import Contacts from "../components/ContactsComponent";
import FooterAbout from "../components/FooterAbout";
import Navbar from "../components/Navbar";
import NavbarWithBreakpoint from "../components/NavbarWithBreakpoint";
import Portfolios from "../components/PortfoliosComponent";
import Projects from "../components/Projects";

function About({ handleScroll }) {
    const sectionAbout = useRef(null);

    return (
        <div className="bg-base font-sans text-neutral">
            <Navbar />
            <NavbarWithBreakpoint />
            <AboutMe sectionAbout={sectionAbout} />
            <Projects />
            <Portfolios />
            <Contacts />
            <FooterAbout handleScroll={handleScroll} sectionAbout={sectionAbout} />
        </div>
    );
}

export default About;

import { useRef } from "react";

// COMPONENTS
import Contacts from "../components/ContactsComponent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarWithBreakpoint from "../components/NavbarWithBreakpoint";
import PortfoliosComponent from "../components/PortfoliosComponent";
import Projects from "../components/Projects";

function Portfolios(handleScroll) {
    const sectionPortfolios = useRef();

    return (
        <div className="bg-base font-sans text-neutral">
            <Navbar />
            <NavbarWithBreakpoint />
            <PortfoliosComponent />
            <Projects />
            <Contacts />
            <Footer
                handleScroll={handleScroll}
                sectionPortfolios={sectionPortfolios}
            />
        </div>
    );
}

export default Portfolios;

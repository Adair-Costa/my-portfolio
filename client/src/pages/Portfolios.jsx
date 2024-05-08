import { useRef } from "react";

// COMPONENTS
import Contacts from "../components/ContactsComponent";
import FooterPortfolios from "../components/FooterPortfolios";
import Navbar from "../components/Navbar";
import NavbarWithBreakpoint from "../components/NavbarWithBreakpoint";
import PortfoliosComponent from "../components/PortfoliosComponent";
import Projects from "../components/Projects";

function Portfolios({ handleScroll }) {
    const sectionPortfolios = useRef(null);

    return (
        <div className="bg-base font-sans text-neutral">
            <Navbar />
            <NavbarWithBreakpoint />
            <PortfoliosComponent sectionPortfolios={sectionPortfolios} />
            <Projects />
            <Contacts />
            <FooterPortfolios
                handleScroll={handleScroll}
                sectionPortfolios={sectionPortfolios}
            />
        </div>
    );
}

export default Portfolios;

import { useRef } from "react";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarWithBreakpoint from "../components/NavbarWithBreakpoint";
import ContactsComponent from "../components/ContactsComponent";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Contacts({ handleScroll }) {
    const sectionContacts = useRef();

    return (
        <div className="bg-base font-sans text-neutral">
            <Navbar />
            <NavbarWithBreakpoint />
            <Projects />
            <ContactsComponent />
            <Footer handleScroll={handleScroll} sectionContacts={sectionContacts} />
        </div>
    );
}

export default Contacts;

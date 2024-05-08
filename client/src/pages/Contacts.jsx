import { useRef } from "react";

// COMPONENTS
import Navbar from "../components/Navbar";
import NavbarWithBreakpoint from "../components/NavbarWithBreakpoint";
import ContactsComponent from "../components/ContactsComponent";
import Projects from "../components/Projects";
import FooterContacts from "../components/FooterContacts";

function Contacts({ handleScroll }) {
    const sectionContacts = useRef(null);

    return (
        <div className="bg-base font-sans text-neutral">
            <Navbar />
            <NavbarWithBreakpoint />
            <ContactsComponent />
            <Projects sectionContacts={sectionContacts} />
            <FooterContacts handleScroll={handleScroll} sectionContacts={sectionContacts} />
        </div>
    );
}

export default Contacts;

import { useRef } from 'react';

// COMPONENTS
import Navbar from '../components/Navbar';
import NavbarWithBreakpoint from '../components/NavbarWithBreakpoint';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Portfolios from '../components/PortfoliosComponent';
import Contacts from '../components/ContactsComponent';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Home({ handleScroll }) {
    const sectionHome = useRef();

    return (
        <div className="bg-base font-sans text-neutral">
            <Navbar sectionHome={sectionHome} />
            <NavbarWithBreakpoint />
            <Hero />
            <AboutMe />
            <Portfolios />
            <Projects />
            <Contacts />
            <Footer handleScroll={handleScroll} sectionHome={sectionHome} />
        </div>
    );
}

export default Home;

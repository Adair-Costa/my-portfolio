// LIBRARIES
import { useState } from "react";
import { NavLink } from "react-router-dom";

// COMPONENTS
import { AiOutlineMenu } from "react-icons/ai";
import NavigationsWithBreakPoint from "./NavigationWithBreakPoint";

function Navigations() {
    const [isOpen, setIsOpen] = useState(false);

    function handleHamburguer() {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
        <>
            {isOpen ? (
                <NavigationsWithBreakPoint onHamburguer={handleHamburguer} />
            ) : (
                <header className="mb-20 font-semibold">
                    <main>
                        <ul
                            className="bg-background xs:gap-16 flex 
                            items-center justify-between gap-60 px-10 py-8 text-white"
                        >
                            <div className="hidden gap-5 sm:flex">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="text-logo underline hover:transition-all"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className="hover:text-logo hover:transition-all"
                                    >
                                        About Me
                                    </NavLink>
                                </li>
                            </div>
                            <div>
                                <li>
                                    <NavLink
                                        to="/"
                                        className="font-logo text-logo xs:text-2xl text-4xl
                                font-extrabold hover:text-white hover:transition-all md:text-4xl"
                                    >
                                        A.C
                                    </NavLink>
                                </li>
                            </div>
                            <div className="hidden gap-5 sm:flex">
                                <li>
                                    <NavLink
                                        to="/works"
                                        className="hover:text-logo hover:transition-all"
                                    >
                                        Works
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                        className="hover:text-logo hover:transition-all"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </div>
                            <div className="sm:hidden">
                                <ul>
                                    <li>
                                        <a href="#" onClick={handleHamburguer}>
                                            <AiOutlineMenu className="text-Zinc-800 size-8" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </main>
                </header>
            )}
        </>
    );
}

export default Navigations;

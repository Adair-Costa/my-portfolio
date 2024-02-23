// LIBRARIES
import { NavLink } from "react-router-dom";

// COMPONENTS
import { IoCloseSharp } from "react-icons/io5";

function NavigationsWithBreakPoint({ onHamburguer }) {

    return (
        <>
            <div className="flex sm:flex justify-end pl-5 pr-5 pt-5">
                <IoCloseSharp className="size-8" onClick={onHamburguer} />
            </div>
            <header className="mb-20 pt-12 font-semibold">
                <main className="">
                    <ul
                        className="bg-background flex flex-col
                        items-center justify-between gap-5 text-xl"
                    >
                        <li>
                            <NavLink to="/" className="text-logo underline">
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
                    </ul>
                </main>
            </header>
        </>
    );
}

export default NavigationsWithBreakPoint;

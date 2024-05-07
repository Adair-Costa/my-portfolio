import { NavLink } from "react-router-dom";

// COMPONENTS
import Logo from "../assets/logo.png";

function Navbar({ sectionHome }) {
    return (
        <div
            ref={sectionHome}
            className="flex items-center justify-between bg-base 
            px-4 pt-8 font-medium phone:hidden tablet:flex"
        >
            <div>
                <NavLink to="/">
                    <img className="size-6" src={Logo} alt="Logo" />
                </NavLink>
            </div>

            <ul className="flex gap-4">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolios">Portfolios</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className="rounded-3xl border-2
                      border-white px-4 py-2 text-base text-white 
                        active:bg-base tablet:hover:bg-base"
                    >
                        <button>Contacts</button>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;

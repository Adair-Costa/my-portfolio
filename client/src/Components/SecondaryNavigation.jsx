// LIBRARIES
import { NavLink } from "react-router-dom";

function SecondaryNavigation() {
    return (
        <div>
            <h3
                className="xs:font-thin mb-5 text-xl font-extrabold
            md:font-extrabold"
            >
                Navigation
            </h3>
            <ul
                className="xs:text-base flex flex-col items-center justify-center
            gap-5 text-lg opacity-50 lg:text-lg"
            >
                <li>
                    <NavLink className="hover:text-logo transition-all" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="hover:text-logo transition-all" to="/about">
                        About Me
                    </NavLink>
                </li>
                <li>
                    <NavLink className="hover:text-logo transition-all" to="/works">
                        Works
                    </NavLink>
                </li>
                <li>
                    <NavLink className="hover:text-logo transition-all" to="/contact">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SecondaryNavigation

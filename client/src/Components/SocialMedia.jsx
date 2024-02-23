// LIBRARIES
import { NavLink } from "react-router-dom";

function SocialMedia() {
    return (
        <div>
            <h3
                className="xs:font-thin mb-5 text-xl font-extrabold
                md:font-extrabold"
            >
                Social Media
            </h3>
            <ul
                className="xs:text-base flex flex-col items-center justify-center
                gap-5 text-lg opacity-50 lg:text-lg"
            >
                <li>
                    <NavLink
                        to="https://www.linkedin.com/in/adair-costa-670aaa17b/"
                        className="hover:text-logo transition-all"
                        target="_blank"
                    >
                        Linkedin
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="#"
                        className="hover:text-logo transition-all"
                        target="_blank"
                    >
                        Instagram
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="https://github.com/Adair-Costa"
                        className="hover:text-logo transition-all"
                        target="_blank"
                    >
                        Github
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SocialMedia

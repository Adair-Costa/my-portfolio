import ButtonScrollToTop from "./ButtonScrollToTop";
import { NavLink } from "react-router-dom";

// COMPONENTS
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import Logo from "../assets/logo.png";

function FooterPortfolios({ handleScroll, sectionPortfolios }) {

    return (
        <div
            className="mx-4 mt-4 flex flex-col items-center gap-4
        p-8 tablet:flex-row tablet:items-center tablet:justify-between"
        >
            <div>
                <NavLink to="/">
                    <img className="size-6" src={Logo} alt="Logo" />
                </NavLink>
            </div>

            <div>
                <h6>
                    Copyright <span className="text-primary">Adair Costa</span>  2024. All
                    rights reserved.
                </h6>
            </div>

            <ul className="flex gap-4 text-[1.2rem] tablet:text-primary">
                <li>
                    <NavLink
                        to="https://www.linkedin.com/in/adair-costa-670aaa17b/"
                        target="_blank"
                    >
                        <FaLinkedin />
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="https://github.com/Adair-Costa/Adair-Costa"
                        target="_blank"
                    >
                        <FaGithub />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/portfolios">
                        <FaInstagram />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="https://twitter.com/aldairsalvador3" target="_blank">
                        <FaTwitter />
                    </NavLink>
                </li>
            </ul>
            <ButtonScrollToTop onClick={() => handleScroll(sectionPortfolios)}>
                <NavLink to="#">
                    <h6 className=" font-medium text-primary underline">Scroll to top</h6>
                </NavLink>
            </ButtonScrollToTop>
        </div>
    );
}

export default FooterPortfolios;

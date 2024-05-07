import { useState } from 'react';
import { NavLink } from 'react-router-dom';

// COMPONENTS
import Logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function NavbarWithBreakpoint() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenu() {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div className="flex justify-between bg-base pt-8 px-4
            tablet:hidden">
            <div>
                <NavLink to="/">
                    <img className="size-6" src={Logo} alt="Logo" />
                </NavLink>
            </div>

            <div className='flex flex-col items-end w-full'>
                <button onClick={handleMenu}>
                    {isOpen ? <IoClose className="size-6 mb-8" /> : <IoMenu className="size-6 mb-8" />}
                </button>
                {isOpen && <ul className="flex flex-col items-center gap-4
                        w-full">
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
                        <NavLink to="/contacts">
                            <button>Contacts</button>
                        </NavLink>
                    </li>
                </ul>}
            </div>
        </div>
    );
}

export default NavbarWithBreakpoint;

// LIBRARY
import { Link } from "react-router-dom";

function Button({ children, to }) {

    return (
        <button
            className="bg-logo xs:px-3 xs:py-1 xs:text-base mb-5 
            rounded-md transition delay-150 duration-200 ease-in-out 
            hover:-translate-y-0.5 hover:opacity-85 md:px-4 md:py-2 md:text-xl"
        >
            <Link to={to}>{children}</Link>
        </button>
    );
}

export default Button;

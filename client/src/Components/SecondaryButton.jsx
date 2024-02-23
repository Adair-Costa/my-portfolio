// LIBRARY
import { Link } from "react-router-dom";

function SecondaryButton({ children, to }) {
    return (
        <button
            className="xs:w-[100%] md:hover:text-logo mb-5 w-[15%] rounded-md
            border px-8 py-3 transition 
            delay-150 duration-200 ease-in-out hover:-translate-y-0.5 hover:opacity-85
            md:w-[20%] lg:w-[15%]"
        >
            <Link to={to} target='_blank'>{children}</Link>
        </button>
    );
}

export default SecondaryButton;

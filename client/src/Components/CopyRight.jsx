// LIBRARIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCopyright,
} from "@fortawesome/free-solid-svg-icons";

const copyright = <FontAwesomeIcon icon={faCopyright} />;

function CopyRight() {
    return (
        <p className="pt-5 text-center text-lg opacity-50 xs:text-base
                xs:leading-7 sm:text-lg">
            {copyright} Copyright Adair Costa {new Date().getFullYear()}. All rights
            reserved.
        </p>
    )
}

export default CopyRight

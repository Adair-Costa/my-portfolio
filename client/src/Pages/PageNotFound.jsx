// LIBRARY
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import PrimaryButton from '../components/PrimaryButton';

const leftArrow = <FontAwesomeIcon icon={faArrowLeft} className="pr-1" />;

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center pt-10">
            <h1 className="mb-3 text-3xl text-logo">Something went wrong! 🥲</h1>
            <PrimaryButton to="/">{leftArrow}Back to home</PrimaryButton>
        </div>
    );
}

export default PageNotFound;

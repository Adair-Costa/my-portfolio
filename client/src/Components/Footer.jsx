// LIBRARIES
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import PrimaryButton from "./PrimaryButton";
import Row from "./Row";
import aboutMe from "/images/aboutMe.png";
import ProfileImage from "./ProfileImage";
import CopyRight from "./CopyRight";
import Skills from "./Skills";
import SocialMedia from "./SocialMedia";
import SecondaryNavigation from "./SecondaryNavigation";
import Services from "./Services";

const arrowRight = <FontAwesomeIcon icon={faCircleArrowRight} />;

function Footer() {
    return (
        <footer className="bg-hero p-10">
            <div className="mb-5 flex flex-col items-center gap-5">
                <h2
                    className="xs:text-lg text-logo text-5xl capitalize
                    sm:text-xl md:text-2xl lg:text-5xl"
                >
                    Got a project in mind?
                </h2>
                <PrimaryButton to='/contact'>Let's talk {arrowRight}</PrimaryButton>
            </div>
            <Row />
            <div
                className="xs:flex-col xs:gap-5 flex items-center justify-center gap-10
                pb-10 pt-10 sm:gap-10 md:flex-row"
            >
                <div
                    className="flex flex-col items-center justify-center
                    gap-5 md:w-[15%]"
                >
                    <ProfileImage>
                        <img
                            src={aboutMe}
                            className="xs:w-[50%] sm:w-[15%] md:w-[80%]"
                            alt="Photo about me"
                        />
                    </ProfileImage>
                    <Skills />
                </div>
                <SecondaryNavigation />
                <Services />
                <SocialMedia />
            </div>
            <Row />
            <CopyRight />
        </footer>
    );
}

export default Footer;

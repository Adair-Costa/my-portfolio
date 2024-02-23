// COMPONENTS
import AboutMe from "../Components/AboutMe";
import Experiences from "../Components/Experiences";
import Footer from "../Components/Footer";
import Navigations from "../Components/Navigations";
import ProfileImage from "../Components/ProfileImage";
import WhatIamDoing from "../Components/WhatIamDoing";

function About() {
    return (
        <div>
            <Navigations />
            <AboutMe>
                <h1
                    className="xs:text-lg xs:text-center pb-5 text-3xl 
                    tracking-[0.5rem] opacity-50 sm:text-2xl"
                >
                    About Me
                </h1>
                <ProfileImage>
                    <img
                        src="/images/aboutMe.png"
                        className="xs:w-[50%] pb-5 sm:w-[15%] md:w-[15%]"
                        alt="Photo about me"
                    />
                </ProfileImage>
                <p
                    className="xs:text-justify xs:w-[100%] text-paragraph w-[70%]
                    text-lg leading-8 md:w-[60%] md:text-left"
                >
                    More than 3 years of experience in <span className="text-logo uppercase">web development </span>
                    and 1 year in <span className="text-logo uppercase">digital design</span>.
                    I'm currently looking for a position as a <span className="text-logo uppercase">full stack web developer</span> to
                    help different brands solve problems through beautiful designs and
                    user experiences.
                </p>
            </AboutMe>
            <WhatIamDoing />
            <Experiences />
            <Footer />
        </div>
    );
}

export default About;

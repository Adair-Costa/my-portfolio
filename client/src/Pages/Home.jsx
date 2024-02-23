// COMPONENTS
import ProfileImage from "../Components/ProfileImage";
import aboutMe from "/images/aboutMe.png";
import AboutMe from "../Components/AboutMe";
import Hero from "../Components/Hero";
import Navigations from "../Components/Navigations";
import WhatIamDoing from "../Components/WhatIamDoing";
import Footer from "../Components/Footer";

function Home() {
    return (
        <div>
            <Navigations />
            <Hero />
            <AboutMe>
                <h1 className="pb-5 text-3xl tracking-[0.5rem] opacity-50 
                xs:text-lg xs:text-center sm:text-2xl">About Me</h1>
                <ProfileImage>
                    <img
                        src={aboutMe}
                        className="xs:w-[50%] pb-5 sm:w-[15%] md:w-[15%]"
                        alt="Photo about me"
                    />
                </ProfileImage>
                <p
                    className="text-logo xs:text-justify xs:w-[100%] w-[70%] text-lg
                    leading-8 md:w-[70%] md:text-left"
                >
                    Hi there, I’m <span className="text-white opacity-50">Adair Costa</span>
                    . I was born in <span className="text-white opacity-50">Lisbon, Portugal</span>.
                    From an early age I showed interest for computers and that grew into a passion
                    during high school. I got into web development in college. Attending the
                    Autonomous University of Lisbon, in Portugal, was the best decision I
                    made because it showed me what I wanted to do for the rest of my life.
                    Currently I help businesses all around the world by coding websites and
                    web apps. Right now I’m based in <span className="text-white opacity-50">Dublin, Ireland</span>.
                </p>
            </AboutMe>
            <WhatIamDoing />
            <Footer />
        </div>
    );
}

export default Home;
